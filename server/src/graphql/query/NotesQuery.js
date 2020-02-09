import {GraphQLList} from "graphql";

const NoteService = require('../../services/NoteService');
const {noteType} = require('../nodeTypes');


const NotesQuery = {
    type: GraphQLList(noteType),
    args: {},
    resolve: async () => {
        const noteService = new NoteService();
        return noteService.getAllNotes();
    }
};

module.exports = {NotesQuery};
