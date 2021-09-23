import {Author} from "../models/types";

export class GenericMapper {
    mapAuthor(): Author {
        return {
            name: 'Leidy Yohana ',
            lastName: 'Rodriguez fuentes'
        }
    }
}
