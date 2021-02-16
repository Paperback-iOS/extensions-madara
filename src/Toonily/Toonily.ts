import {LanguageCode, SourceInfo, TagType} from "paperback-extensions-common";
import {Madara} from '../Madara'

const TOONILY_DOMAIN = "https://toonily.com"

export const ToonilyResetCacheInfo: SourceInfo = {
    version: '1.0.0',
    name: 'ToonilyResetCache',
    description: 'Extension that pulls manga from toonily.com',
    author: 'GameFuzzy',
    authorWebsite: 'http://github.com/gamefuzzy',
    icon: "icon.png",
    hentaiSource: false,
    websiteBaseURL: TOONILY_DOMAIN,
    sourceTags: [
        {
            text: "Notifications",
            type: TagType.GREEN
        },
        {
            text: "18+",
            type: TagType.YELLOW
        }
    ]
}

export class ToonilyResetCache extends Madara {
    baseUrl: string = TOONILY_DOMAIN
    languageCode: LanguageCode = LanguageCode.ENGLISH
    hasAdvancedSearchPage: boolean = true
    sourceTraversalPathName: string = 'webtoon'
    userAgentRandomizer = ''
}
