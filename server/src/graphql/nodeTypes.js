import {GraphQLID, GraphQLObjectType, GraphQLString} from "graphql";

const noteType = new GraphQLObjectType({
    name: 'Note',
    fields: {
        _id: {type: GraphQLID},
        content: {type: GraphQLString}
    }
});

module.exports = {noteType};