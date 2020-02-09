import {GraphQLObjectType, GraphQLSchema} from "graphql";
import {CreateNoteMutation, DeleteNoteMutation, UpdateNoteMutation} from "./mutation/NotesMutation";

const {NotesQuery} = require("./query/NotesQuery");

const QueryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        notes: NotesQuery
    })
});

const MutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        createNote: CreateNoteMutation,
        deleteNote: DeleteNoteMutation,
        updateNote: UpdateNoteMutation
    })
});

const schema = new GraphQLSchema({query: QueryType, mutation: MutationType});

module.exports = schema;
