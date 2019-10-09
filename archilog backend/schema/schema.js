const graphql = require('graphql');
const _ = require('lodash');
const cours = require('../models/Cours')
const formateurs = require('../models/Formateurs')


const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList, GraphQLNonNull, GraphQLInt } = graphql;


const CourType = new GraphQLObjectType({
    name: 'Cour',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        contenu: { type: GraphQLString },
        figure: { type: GraphQLString },
        secteur: { type: GraphQLString },
        Formateur: {
            type: FormateurType,
            resolve(parent, args) {
                //    return _.find(formateurs,{id:parent.formateurId})
                return formateurs.findById(parent.formateurId)
            }
        },
    })
});

const FormateurType = new GraphQLObjectType({
    name: 'Formateur',
    fields: () => ({
        id: { type: GraphQLID },
        img: { type: GraphQLString },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        cours: {
            type: new GraphQLList(CourType),
            resolve(parent, args) {
                // return _.filter(cours,{formateurId:parent.id})
                return cours.find({ formateurId: parent.id })
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        cour: {
            type: CourType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // return _.find(cours, { id: args.id });
                return cours.findById(args.id)
            }
        },
        formateur: {
            type: FormateurType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // return _.find(formateurs, { id: args.id });
                return formateurs.findById(args.id)
            }
        },
        cours: {
            type: new GraphQLList(CourType),
            resolve(parent, args) {
                return cours.find({})
            }
        },
        formateurs: {
            type: new GraphQLList(FormateurType),
            resolve(parent, args) {
                return formateurs.find({})
            }
        },
        secteur: {
            type: new GraphQLList(CourType),
            args: { secteur: { type: GraphQLString } },
            resolve(parent, args) {
                return cours.find({ secteur: args.secteur });
            }
        }
    }
});




const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addCour: {
            type: CourType,
            args: {
                title: { type: new GraphQLNonNull(GraphQLString) },
                contenu: { type: new GraphQLNonNull(GraphQLString) },
                figure: { type: new GraphQLNonNull(GraphQLString) },
                secteur: { type: new GraphQLNonNull(GraphQLString) },
                formateurId: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) {
                let cour = new cours({
                    title: args.title,
                    contenu: args.contenu,
                    figure: args.figure,
                    secteur: args.secteur,
                    formateurId:args.formateurId,
                });
                return cour.save();
            }
        },
        addFormateur: {
            type: FormateurType,
            args: {
                img: { type: new GraphQLNonNull(GraphQLString) },
                name: { type: new GraphQLNonNull(GraphQLString) },
                age: { type: new GraphQLNonNull(GraphQLInt) },

            },
            resolve(parent, args) {
                let formateur = new formateurs({
                    img: args.img,
                    name: args.name,
                    age: args.age,
                });
                return formateur.save();
            }
        },
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});