/// <reference path="jquery.d.ts" />
/// <reference path="underscore.d.ts" />
/// <reference path="globalize.d.ts" />
/// <reference path="ModalBox.d.ts" />
/// <reference path="jquery.jsonp.d.ts" />
/// <reference path="jstz.d.ts" />
/// <reference path="d3.d.ts" />
/// <reference path="phonegap.d.ts" />
/// <reference path="fastclick.d.ts" />
/// <reference path="MagicBox.d.ts" />
/*****************************************************************************
 * @license Copyright (c) 2005-2014, Coveo Solutions Inc.
 *****************************************************************************/
/*****************************************************************************
 * NOTE:
 *
 * We advise against directly modifying this file. Doing so will prevent you
 * from updating to later versions. Also, if you modify this file untold number
 * of kittens will die.
 *
 *****************************************************************************/
declare var secretFeatureVariable1309: boolean;
declare module Coveo {
    var version: {
        "lib": string;
        "product": string;
        "supportedApiVersion": number;
    };
}
declare module Coveo {
    function l(str: "Unknown"): any;
    function l(str: "And"): any;
    function l(str: "Authenticating", param0: string): any;
    function l(str: "Clear", param0: string): any;
    function l(str: "CompleteQuery"): any;
    function l(str: "Exclude", param0: string): any;
    function l(str: "EnterTag"): any;
    function l(str: "Next"): any;
    function l(str: "Last"): any;
    function l(str: "Link"): any;
    function l(str: "Or"): any;
    function l(str: "Previous"): any;
    function l(str: "QueryDidntMatchAnyDocuments"): any;
    function l(str: "QueryException", param0: string): any;
    function l(str: "Me"): any;
    function l(str: "Remove"): any;
    function l(str: "Search"): any;
    function l(str: "SearchFor", param0: string): any;
    function l(str: "ShareQuery"): any;
    function l(str: "Preferences"): any;
    function l(str: "LinkOpeningSettings"): any;
    function l(str: "Reauthenticate", param0: string): any;
    function l(str: "ResultsFilteringExpression"): any;
    function l(str: "FiltersInYourPreferences"): any;
    function l(str: "Create"): any;
    function l(str: "SearchIn", param0: string): any;
    function l(str: "Seconds", param0: string, count: number): any;
    function l(str: "ShowingResultsOf", param0: string, param1: string, param2: string, count: number): any;
    function l(str: "SwitchTo", param0: string): any;
    function l(str: "Unexclude", param0: string): any;
    function l(str: "ClearAllFilters"): any;
    function l(str: "SkipLogin"): any;
    function l(str: "LoginInProgress"): any;
    function l(str: "Login"): any;
    function l(str: "GetStarted"): any;
    function l(str: "More"): any;
    function l(str: "Less"): any;
    function l(str: "Settings"): any;
    function l(str: "Score"): any;
    function l(str: "ScoreDescription"): any;
    function l(str: "Occurrences"): any;
    function l(str: "OccurrencesDescription"): any;
    function l(str: "Label"): any;
    function l(str: "Of"): any;
    function l(str: "LabelDescription"): any;
    function l(str: "Value"): any;
    function l(str: "ValueDescription"): any;
    function l(str: "AlphaAscending"): any;
    function l(str: "AlphaDescending"): any;
    function l(str: "ChiSquare"): any;
    function l(str: "Nosort"): any;
    function l(str: "RelativeFrequency"): any;
    function l(str: "RelativeFrequencyDescription"): any;
    function l(str: "DateDistribution"): any;
    function l(str: "Custom"): any;
    function l(str: "CustomDescription"): any;
    function l(str: "ComputedField"): any;
    function l(str: "Ascending"): any;
    function l(str: "Descending"): any;
    function l(str: "noResultFor", param0: string): any;
    function l(str: "autoCorrectedQueryTo", param0: string): any;
    function l(str: "didYouMean", param0: string): any;
    function l(str: "SuggestedResults"): any;
    function l(str: "SuggestedQueries"): any;
    function l(str: "MostRelevantItems"): any;
    function l(str: "AllItems"): any;
    function l(str: "ShowLess"): any;
    function l(str: "ShowMore"): any;
    function l(str: "HideFacet"): any;
    function l(str: "ShowFacet"): any;
    function l(str: "AndOthers", param0: string, count: number): any;
    function l(str: "Others", param0: string, count: number): any;
    function l(str: "MostRelevantPosts"): any;
    function l(str: "CompleteThread"): any;
    function l(str: "ShowCompleteThread"): any;
    function l(str: "ShowOnlyTopMatchingPosts"): any;
    function l(str: "MostRelevantReplies"): any;
    function l(str: "AllConversation"): any;
    function l(str: "ShowAllConversation"): any;
    function l(str: "ShowAllReplies"): any;
    function l(str: "ShowOnlyMostRelevantReplies"): any;
    function l(str: "Close"): any;
    function l(str: "Open"): any;
    function l(str: "OpenInOutlookWhenPossible"): any;
    function l(str: "AlwaysOpenInNewWindow"): any;
    function l(str: "Quickview"): any;
    function l(str: "ErrorReport"): any;
    function l(str: "OopsError"): any;
    function l(str: "ProblemPersists"): any;
    function l(str: "GoBack"): any;
    function l(str: "Reset"): any;
    function l(str: "Retry"): any;
    function l(str: "MoreInfo"): any;
    function l(str: "Username"): any;
    function l(str: "Password"): any;
    function l(str: "PostedBy"): any;
    function l(str: "CannotConnect"): any;
    function l(str: "BadUserPass"): any;
    function l(str: "PleaseEnterYourCredentials", param0: string): any;
    function l(str: "PleaseEnterYourSearchPage"): any;
    function l(str: "Collapse"): any;
    function l(str: "Collapsable"): any;
    function l(str: "Expand"): any;
    function l(str: "Today"): any;
    function l(str: "Yesterday"): any;
    function l(str: "Tomorrow"): any;
    function l(str: "Duration", param0: string): any;
    function l(str: "IndexDuration", param0: string): any;
    function l(str: "ProxyDuration", param0: string): any;
    function l(str: "ClientDuration", param0: string): any;
    function l(str: "Unavailable"): any;
    function l(str: "Reply"): any;
    function l(str: "ReplyAll"): any;
    function l(str: "Forward"): any;
    function l(str: "From"): any;
    function l(str: "Caption"): any;
    function l(str: "Expression"): any;
    function l(str: "Tab"): any;
    function l(str: "Tabs"): any;
    function l(str: "EnterExpressionName"): any;
    function l(str: "EnterExpressionToFilterWith"): any;
    function l(str: "SelectTab"): any;
    function l(str: "SelectAll"): any;
    function l(str: "PageUrl"): any;
    function l(str: "ErrorSavingToDevice"): any;
    function l(str: "ErrorReadingFromDevice"): any;
    function l(str: "AppIntro"): any;
    function l(str: "TryDemo"): any;
    function l(str: "ContactUs"): any;
    function l(str: "NewToCoveo"): any;
    function l(str: "LetUsHelpGetStarted"): any;
    function l(str: "LikesThis", param0: string, count: number): any;
    function l(str: "CannotConnectSearchPage"): any;
    function l(str: "AreYouSureDeleteFilter", param0: string, param1: string): any;
    function l(str: "OnlineHelp"): any;
    function l(str: "Done"): any;
    function l(str: "SaveFacetState"): any;
    function l(str: "ClearFacetState"): any;
    function l(str: "DisplayingTheOnlyMessage"): any;
    function l(str: "NoNetworkConnection"): any;
    function l(str: "UnknownConnection"): any;
    function l(str: "EthernetConnection"): any;
    function l(str: "WiFi"): any;
    function l(str: "CELL"): any;
    function l(str: "CELL_2G"): any;
    function l(str: "CELL_3G"): any;
    function l(str: "CELL_4G"): any;
    function l(str: "Relevance"): any;
    function l(str: "Date"): any;
    function l(str: "Amount"): any;
    function l(str: "QueryExceptionNoException"): any;
    function l(str: "QueryExceptionInvalidSyntax"): any;
    function l(str: "QueryExceptionInvalidCustomField"): any;
    function l(str: "QueryExceptionInvalidDate"): any;
    function l(str: "QueryExceptionInvalidExactPhrase"): any;
    function l(str: "QueryExceptionInvalidDateOp"): any;
    function l(str: "QueryExceptionInvalidNear"): any;
    function l(str: "QueryExceptionInvalidWeightedNear"): any;
    function l(str: "QueryExceptionInvalidTerm"): any;
    function l(str: "QueryExceptionTooManyTerms"): any;
    function l(str: "QueryExceptionWildcardTooGeneral"): any;
    function l(str: "QueryExceptionInvalidSortField"): any;
    function l(str: "QueryExceptionInvalidSmallStringOp"): any;
    function l(str: "QueryExceptionRequestedResultsMax"): any;
    function l(str: "QueryExceptionAggregatedMirrorDead"): any;
    function l(str: "QueryExceptionAggregatedMirrorQueryTimeOut"): any;
    function l(str: "QueryExceptionAggregatedMirrorInvalidBuildNumber"): any;
    function l(str: "QueryExceptionAggregatedMirrorCannotConnect"): any;
    function l(str: "QueryExceptionNotEnoughLeadingCharsWildcard"): any;
    function l(str: "QueryExceptionSecurityInverterNotFound"): any;
    function l(str: "QueryExceptionSecurityInverterAccessDenied"): any;
    function l(str: "QueryExceptionAggregatedMirrorCannotImpersonate"): any;
    function l(str: "QueryExceptionUnexpected"): any;
    function l(str: "QueryExceptionAccessDenied"): any;
    function l(str: "QueryExceptionSuperUserTokenInvalid"): any;
    function l(str: "QueryExceptionSuperUserTokenExpired"): any;
    function l(str: "QueryExceptionLicenseQueriesExpired"): any;
    function l(str: "QueryExceptionLicenseSuperUserTokenNotSupported"): any;
    function l(str: "QueryExceptionInvalidSession"): any;
    function l(str: "QueryExceptionInvalidDocument"): any;
    function l(str: "QueryExceptionSearchDisabled"): any;
    function l(str: "FileType"): any;
    function l(str: "ShowAttachment"): any;
    function l(str: "OnFeed", param0: string): any;
    function l(str: "Author"): any;
    function l(str: "NoTitle"): any;
    function l(str: "CurrentSelections"): any;
    function l(str: "AllContent"): any;
    function l(str: "CancelLastAction"): any;
    function l(str: "SearchTips"): any;
    function l(str: "CheckSpelling"): any;
    function l(str: "TryUsingFewerKeywords"): any;
    function l(str: "SelectFewerFilters"): any;
    function l(str: "Document"): any;
    function l(str: "Time"): any;
    function l(str: "StartDate"): any;
    function l(str: "StartTime"): any;
    function l(str: "DurationTitle"): any;
    function l(str: "UserQuery"): any;
    function l(str: "ShowUserActions"): any;
    function l(str: "NoData"): any;
    function l(str: "EventType"): any;
    function l(str: "GoToFullSearch"): any;
    function l(str: "GoToEdition"): any;
    function l(str: "RemoveContext"): any;
    function l(str: "BoxAttachToCase"): any;
    function l(str: "AttachToCase"): any;
    function l(str: "Attach"): any;
    function l(str: "Attached"): any;
    function l(str: "Detach"): any;
    function l(str: "AdditionalFilters"): any;
    function l(str: "SelectNonContextualSearch"): any;
    function l(str: "CopyPasteToSupport"): any;
    function l(str: "FollowQueryDescription"): any;
    function l(str: "SearchAlerts_Panel"): any;
    function l(str: "SearchAlerts_PanelDescription"): any;
    function l(str: "SearchAlerts_PanelNoSearchAlerts"): any;
    function l(str: "SearchAlerts_Fail"): any;
    function l(str: "SearchAlerts_Type"): any;
    function l(str: "SearchAlerts_Content"): any;
    function l(str: "SearchAlerts_Actions"): any;
    function l(str: "EmptyQuery"): any;
    function l(str: "SearchAlerts_Type_followQuery"): any;
    function l(str: "SearchAlerts_Type_followDocument"): any;
    function l(str: "SearchAlerts_unFollowing"): any;
    function l(str: "SearchAlerts_follow"): any;
    function l(str: "SearchAlerts_followed"): any;
    function l(str: "SearchAlerts_followQuery"): any;
    function l(str: "Subscription_StopFollowingQuery"): any;
    function l(str: "SearchAlerts_Frequency"): any;
    function l(str: "SubscriptionsManageSubscriptions"): any;
    function l(str: "SubscriptionsMessageFollowQuery", param0: string): any;
    function l(str: "SubscriptionsMessageFollow", param0: string): any;
    function l(str: "Expiration"): any;
    function l(str: "Daily"): any;
    function l(str: "Monday"): any;
    function l(str: "Tuesday"): any;
    function l(str: "Wednesday"): any;
    function l(str: "Thursday"): any;
    function l(str: "Friday"): any;
    function l(str: "Saturday"): any;
    function l(str: "Sunday"): any;
    function l(str: "StartTypingCaseForSuggestions"): any;
    function l(str: "ExportToExcel"): any;
    function l(str: "ExportToExcelDescription"): any;
    function l(str: "CaseCreationNoResults"): any;
    function l(str: "SortBy"): any;
    function l(str: "objecttype_people"): any;
    function l(str: "objecttype_message"): any;
    function l(str: "objecttype_feed"): any;
    function l(str: "objecttype_thread"): any;
    function l(str: "objecttype_file"): any;
    function l(str: "objecttype_board"): any;
    function l(str: "objecttype_category"): any;
    function l(str: "objecttype_account"): any;
    function l(str: "objecttype_campaign"): any;
    function l(str: "objecttype_case"): any;
    function l(str: "objecttype_contact"): any;
    function l(str: "objecttype_contract"): any;
    function l(str: "objecttype_event"): any;
    function l(str: "objecttype_lead"): any;
    function l(str: "objecttype_solution"): any;
    function l(str: "objecttype_task"): any;
    function l(str: "objecttype_user"): any;
    function l(str: "objecttype_attachment"): any;
    function l(str: "objecttype_casecomment"): any;
    function l(str: "objecttype_opportunity"): any;
    function l(str: "objecttype_feeditem"): any;
    function l(str: "objecttype_feedcomment"): any;
    function l(str: "objecttype_note"): any;
    function l(str: "objecttype_product"): any;
    function l(str: "objecttype_partner"): any;
    function l(str: "objecttype_kbdocumentation"): any;
    function l(str: "objecttype_kbtechnicalarticle"): any;
    function l(str: "objecttype_kbsolution"): any;
    function l(str: "objecttype_kbknowledgearticle"): any;
    function l(str: "objecttype_kbattachment"): any;
    function l(str: "filetype_html"): any;
    function l(str: "filetype_wiki"): any;
    function l(str: "filetype_webscraperwebpage"): any;
    function l(str: "filetype_image"): any;
    function l(str: "filetype_folder"): any;
    function l(str: "filetype_txt"): any;
    function l(str: "filetype_zip"): any;
    function l(str: "filetype_pdf"): any;
    function l(str: "filetype_xml"): any;
    function l(str: "filetype_doc"): any;
    function l(str: "filetype_xls"): any;
    function l(str: "filetype_ppt"): any;
    function l(str: "filetype_video"): any;
    function l(str: "filetype_youtube"): any;
    function l(str: "filetype_saleforceitem"): any;
    function l(str: "filetype_exchangemessage"): any;
    function l(str: "filetype_exchangeappointment"): any;
    function l(str: "filetype_exchangenote"): any;
    function l(str: "filetype_exchangetask"): any;
    function l(str: "filetype_exchangeperson"): any;
    function l(str: "filetype_activedirperson"): any;
    function l(str: "filetype_exchangeactivity"): any;
    function l(str: "filetype_exchangecalendarmessage"): any;
    function l(str: "filetype_exchangedocument"): any;
    function l(str: "filetype_exchangerssfeed"): any;
    function l(str: "filetype_exchangejunkmessage"): any;
    function l(str: "filetype_exchangeofficecom"): any;
    function l(str: "filetype_lithiummessage"): any;
    function l(str: "filetype_lithiumthread"): any;
    function l(str: "filetype_lithiumboard"): any;
    function l(str: "filetype_lithiumcategory"): any;
    function l(str: "filetype_lithiumcommunity"): any;
    function l(str: "filetype_spportal"): any;
    function l(str: "filetype_spsite"): any;
    function l(str: "filetype_spuserprofile"): any;
    function l(str: "filetype_sparea"): any;
    function l(str: "filetype_spannouncement"): any;
    function l(str: "filetype_spannouncementlist"): any;
    function l(str: "filetype_spcontact"): any;
    function l(str: "filetype_spcontactlist"): any;
    function l(str: "filetype_spcustomlist"): any;
    function l(str: "filetype_spdiscussionboard"): any;
    function l(str: "filetype_spdiscussionboardlist"): any;
    function l(str: "filetype_spdocumentlibrarylist"): any;
    function l(str: "filetype_spevent"): any;
    function l(str: "filetype_speventlist"): any;
    function l(str: "filetype_spformlibrarylist"): any;
    function l(str: "filetype_spissue"): any;
    function l(str: "filetype_spissuelist"): any;
    function l(str: "filetype_splink"): any;
    function l(str: "filetype_splinklist"): any;
    function l(str: "filetype_sppicturelibrarylist"): any;
    function l(str: "filetype_spsurvey"): any;
    function l(str: "filetype_spsurveylist"): any;
    function l(str: "filetype_sptask"): any;
    function l(str: "filetype_sptasklist"): any;
    function l(str: "filetype_spagenda"): any;
    function l(str: "filetype_spagendalist"): any;
    function l(str: "filetype_spattendee"): any;
    function l(str: "filetype_spattendeelist"): any;
    function l(str: "filetype_spcustomgridlist"): any;
    function l(str: "filetype_spdecision"): any;
    function l(str: "filetype_spdecisionlist"): any;
    function l(str: "filetype_spobjective"): any;
    function l(str: "filetype_spobjectivelist"): any;
    function l(str: "filetype_sptextbox"): any;
    function l(str: "filetype_sptextboxlist"): any;
    function l(str: "filetype_spthingstobring"): any;
    function l(str: "filetype_spthingstobringlist"): any;
    function l(str: "filetype_sparealisting"): any;
    function l(str: "filetype_spmeetingserie"): any;
    function l(str: "filetype_spmeetingserielist"): any;
    function l(str: "filetype_spsitedirectory"): any;
    function l(str: "filetype_spsitedirectorylist"): any;
    function l(str: "filetype_spdatasource"): any;
    function l(str: "filetype_spdatasourcelist"): any;
    function l(str: "filetype_splisttemplatecataloglist"): any;
    function l(str: "filetype_spwebpartcataloglist"): any;
    function l(str: "filetype_spwebtemplatecataloglist"): any;
    function l(str: "filetype_spworkspacepagelist"): any;
    function l(str: "filetype_spunknownlist"): any;
    function l(str: "filetype_spadministratortask"): any;
    function l(str: "filetype_spadministratortasklist"): any;
    function l(str: "filetype_spareadocumentlibrarylist"): any;
    function l(str: "filetype_spblogcategory"): any;
    function l(str: "filetype_spblogcategorylist"): any;
    function l(str: "filetype_spblogcomment"): any;
    function l(str: "filetype_spblogcommentlist"): any;
    function l(str: "filetype_spblogpost"): any;
    function l(str: "filetype_spblogpostlist"): any;
    function l(str: "filetype_spdataconnectionlibrarylist"): any;
    function l(str: "filetype_spdistributiongroup"): any;
    function l(str: "filetype_spdistributiongrouplist"): any;
    function l(str: "filetype_spipfslist"): any;
    function l(str: "filetype_spkeyperformanceindicator"): any;
    function l(str: "filetype_spkeyperformanceindicatorlist"): any;
    function l(str: "filetype_splanguagesandtranslator"): any;
    function l(str: "filetype_splanguagesandtranslatorlist"): any;
    function l(str: "filetype_spmasterpagescataloglist"): any;
    function l(str: "filetype_spnocodeworkflowlibrarylist"): any;
    function l(str: "filetype_spprojecttask"): any;
    function l(str: "filetype_spprojecttasklist"): any;
    function l(str: "filetype_sppublishingpageslibrarylist"): any;
    function l(str: "filetype_spreportdocumentlibrarylist"): any;
    function l(str: "filetype_spreportlibrarylist"): any;
    function l(str: "filetype_spslidelibrarylist"): any;
    function l(str: "filetype_sptab"): any;
    function l(str: "filetype_sptablist"): any;
    function l(str: "filetype_sptranslationmanagementlibrarylist"): any;
    function l(str: "filetype_spuserinformation"): any;
    function l(str: "filetype_spuserinformationlist"): any;
    function l(str: "filetype_spwikipagelibrarylist"): any;
    function l(str: "filetype_spworkflowhistory"): any;
    function l(str: "filetype_spworkflowhistorylist"): any;
    function l(str: "filetype_spworkflowprocess"): any;
    function l(str: "filetype_spworkflowprocesslist"): any;
    function l(str: "filetype_sppublishingimageslibrarylist"): any;
    function l(str: "filetype_spcirculation"): any;
    function l(str: "filetype_spcirculationlist"): any;
    function l(str: "filetype_spdashboardslibrarylist"): any;
    function l(str: "filetype_spdataconnectionforperformancepointlibrarylist"): any;
    function l(str: "filetype_sphealthreport"): any;
    function l(str: "filetype_sphealthreportlist"): any;
    function l(str: "filetype_sphealthrule"): any;
    function l(str: "filetype_sphealthrulelist"): any;
    function l(str: "filetype_spimedictionary"): any;
    function l(str: "filetype_spimedictionarylist"): any;
    function l(str: "filetype_spperformancepointcontent"): any;
    function l(str: "filetype_spperformancepointcontentlist"): any;
    function l(str: "filetype_spphonecallmemo"): any;
    function l(str: "filetype_spphonecallmemolist"): any;
    function l(str: "filetype_sprecordlibrarylist"): any;
    function l(str: "filetype_spresource"): any;
    function l(str: "filetype_spresourcelist"): any;
    function l(str: "filetype_spprocessdiagramslibrarylist"): any;
    function l(str: "filetype_spsitethemeslibrarylist"): any;
    function l(str: "filetype_spsolutionslibrarylist"): any;
    function l(str: "filetype_spwfpublibrarylist"): any;
    function l(str: "filetype_spwhereabout"): any;
    function l(str: "filetype_spwhereaboutlist"): any;
    function l(str: "filetype_spdocumentlink"): any;
    function l(str: "filetype_spdocumentset"): any;
    function l(str: "filetype_spmicrofeedpost"): any;
    function l(str: "filetype_spmicrofeedlist"): any;
    function l(str: "filetype_splistfolder"): any;
    function l(...params: any[]): any;
}
declare module Coveo {
    var L10N: {
        format: (key: string, ...args: any[]) => string;
        formatPlSn: (value: string, count: number) => string;
    };
}
declare module Coveo {
    class Logger {
        private owner;
        static TRACE: number;
        static DEBUG: number;
        static INFO: number;
        static WARN: number;
        static ERROR: number;
        static NOTHING: number;
        static level: number;
        static executionTime: boolean;
        constructor(owner: any);
        trace(...stuff: any[]): void;
        debug(...stuff: any[]): void;
        info(...stuff: any[]): void;
        warn(...stuff: any[]): void;
        error(...stuff: any[]): void;
        private log(level, stuff);
        static enable(): void;
        static disable(): void;
    }
}
declare module Coveo {
    class Assert {
        private static logger;
        static failureHandler: (message?: string) => void;
        static fail(message?: string): void;
        static check(condition: boolean, message?: string): void;
        static isUndefined(obj: any): void;
        static isNotUndefined(obj: any): void;
        static isNull(obj: any): void;
        static isNotNull(obj: any): void;
        static exists(obj: any): void;
        static doesNotExists(obj: any): void;
        static isString(obj: any): void;
        static stringStartsWith(str: string, start: string): void;
        static isNonEmptyString(str: string): void;
        static isNumber(obj: any): void;
        static isLargerThan(expected: number, actual: number): void;
        static isLargerOrEqualsThan(expected: number, actual: number): void;
        static isSmallerThan(expected: number, actual: number): void;
        static isSmallerOrEqualsThan(expected: number, actual: number): void;
    }
    class PreconditionFailedException {
        message: string;
        constructor(message: string);
        toString(): string;
    }
}
declare module Coveo {
    var $: JQueryStatic;
}
declare module Coveo {
    var _: UnderscoreStatic;
}
interface JQueryStatic {
    proxy<T1, R>(func: (arg1: T1) => R, context: any): (arg1: T1) => R;
    proxy<T1, T2, R>(func: (arg1: T1, arg2: T2) => R, context: any): (arg1: T1, arg2: T2) => R;
    proxy<T1, T2, T3, R>(func: (arg1: T1, arg2: T2, arg3: T3) => R, context: any): (arg1: T1, arg2: T2, arg3: T3) => R;
    proxy<T1, T2, T3, T4, R>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => R, context: any): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => R;
    proxy<T1, T2, T3, T4, T5, R>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => R, context: any): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => R;
}
interface JQuery {
    on<T1>(events: string, handler: (JQueryEventObject, arg1: T1) => any): any;
    on<T1, T2>(events: string, handler: (JQueryEventObject, arg1: T1, arg2: T2) => any): any;
    on<T1, T2, T3>(events: string, handler: (JQueryEventObject, arg1: T1, arg2: T2, arg3: T2) => any): any;
    on<T1, T2, T3, T4>(events: string, handler: (JQueryEventObject, arg1: T1, arg2: T2, arg3: T2, arg4: T4) => any): any;
    on<T1, T2, T3, T4, T5>(events: string, handler: (JQueryEventObject, arg1: T1, arg2: T2, arg3: T2, arg4: T4, arg5: T5) => any): any;
    one<T1>(events: string, handler: (JQueryEventObject, arg1: T1) => any): any;
    one<T1, T2>(events: string, handler: (JQueryEventObject, arg1: T1, arg2: T2) => any): any;
    one<T1, T2, T3>(events: string, handler: (JQueryEventObject, arg1: T1, arg2: T2, arg3: T2) => any): any;
    one<T1, T2, T3, T4>(events: string, handler: (JQueryEventObject, arg1: T1, arg2: T2, arg3: T2, arg4: T4) => any): any;
    one<T1, T2, T3, T4, T5>(events: string, handler: (JQueryEventObject, arg1: T1, arg2: T2, arg3: T2, arg4: T4, arg5: T5) => any): any;
    focusin(): any;
    focusout(): any;
    off<T1>(events: string, selector: string, handler: (e: JQueryEventObject, arg1: T1) => any): any;
}
interface JQuery {
    getCursorPosition(): number;
    fastToggle(visible: boolean): JQuery;
    coveo(): Coveo.Component;
    coveo(method: string): any;
    coveo(method: string, arg1: any): any;
    coveo(method: string, arg1: any, arg2: any): any;
    coveo(method: string, arg1: any, arg2: any, arg3: any): any;
    coveo(method: string, arg1: any, arg2: any, arg3: any, arg4: any): any;
    coveo(method: string, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any): any;
    coveo(componentClass?: any): Coveo.Component;
    coveo(method: 'init'): any;
    coveo(method: 'patch', methodName?: any, handler?: (...args: any[]) => any): any;
}
declare module Coveo {
    class Defer {
        private static functions;
        static defer(code: () => void): void;
        static flush(): void;
        private static arm();
        private static popOne();
    }
}
declare module Coveo {
    class Cache<Type> {
        onEmpty: () => Type;
        constructor(onEmpty?: () => Type);
        private cache;
        get(): Type;
        push(value: Type): void;
    }
}
interface XDomainRequest {
    timeout: number;
    onerror: (ev: Event) => any;
    onload: (ev: Event) => any;
    onprogress: (ev: any) => any;
    ontimeout: (ev: Event) => any;
    responseText: string;
    contentType: string;
    open(method: string, url: string): void;
    create(): XDomainRequest;
    abort(): void;
    send(data?: any): void;
}
declare var XDomainRequest: {
    prototype: XDomainRequest;
    new (): XDomainRequest;
};
declare module Coveo.Utils {
    function isUndefined(obj: any): boolean;
    function isNull(obj: any): boolean;
    function isNullOrUndefined(obj: any): boolean;
    function exists(obj: any): boolean;
    function toNotNullString(str: string): string;
    function anyTypeToString(value: any): string;
    function isNullOrEmptyString(str: string): boolean;
    function isNonEmptyString(str: string): boolean;
    function isEmptyString(str: string): boolean;
    function stringStartsWith(str: string, startWith: string): boolean;
    function isNonEmptyArray(obj: any): boolean;
    function isEmptyArray(obj: any): boolean;
    function isHtmlElement(obj: any): boolean;
    function parseIntIfNotUndefined(str: string): number;
    function parseFloatIfNotUndefined(str: string): number;
    function round(num: number, decimals: number): number;
    function parseBooleanIfNotUndefined(str: string): boolean;
    function trim(value: string): string;
    function encodeHTMLEntities(rawStr: string): string;
    function decodeHTMLEntities(rawString: string): string;
    function arrayEqual(array1: any[], array2: any[], sameOrder?: boolean): boolean;
    function objectEqual(obj1: Object, obj2: Object): boolean;
    function isCoveoField(field: string): boolean;
    function escapeRegexCharacter(str: string): string;
    function getCaseInsensitiveProperty(object: {}, name: string): any;
    function getFieldValue(result: QueryResult, name: string): any;
    function throttle(func: any, wait: any, options?: {
        leading?: boolean;
        trailing?: boolean;
    }, context?: any, args?: any): () => any;
    function extendDeep(target: any, src: any): {};
    function getQueryStringValue(key: any, queryString?: string): string;
    function isValidUrl(str: string): boolean;
    function debounce(func: Function, wait: number): (...args: any[]) => void;
    function readCookie(name: string): string;
}
declare module Coveo {
    interface TimeSpanUtilsOptions {
        isMilliseconds: boolean;
    }
    class TimeSpan {
        private milliseconds;
        constructor(time: number, isMilliseconds?: boolean);
        getMilliseconds(): number;
        getSeconds(): number;
        getMinutes(): number;
        getHours(): number;
        getDays(): number;
        getWeeks(): number;
        getHHMMSS(): string;
        static fromDates(from: Date, to: Date): TimeSpan;
    }
}
declare module Coveo.DomUtils {
    function nodeListToArray(nodeList: NodeList): HTMLElement[];
    function find(element: NodeSelector, selector: string): Element;
    function findAll(element: NodeSelector, selector: string): HTMLElement[];
    function findClass(element: HTMLElement, className: string): HTMLElement[];
    function findId(id: string): HTMLElement;
    function addClass(element: HTMLElement, className: string): void;
    function removeClass(element: HTMLElement, className: string): void;
    function getClass(element: HTMLElement): string[];
    function hasClass(element: HTMLElement, className: string): boolean;
    function detach(element: HTMLElement): void;
    function attachEvent(element: HTMLElement, type: string | string, eventHandle: (evt: Event) => void): void;
    function detachEvent(element: HTMLElement, type: string | string, eventHandle: (evt: Event) => void): void;
    function attachEvents(element: HTMLElement, types: string[], eventHandle: (evt: Event) => void): void;
    function detachEvents(element: HTMLElement, types: string[], eventHandle: (evt: Event) => void): void;
    function isEmpty(element: HTMLElement): boolean;
}
declare module Coveo.DeviceUtils {
    function getDeviceName(): string;
    function isAndroid(): boolean;
    function isIos(): boolean;
    function isIE8or9(): boolean;
    function isMobileDevice(): boolean;
    function isPhonegap(): boolean;
    function isSmallScreenWidth(): boolean;
    function isSmallScreenHeight(): boolean;
}
declare var crypto: Crypto;
declare module Coveo {
    class QueryUtils {
        static createGuid(): string;
        static generateWithRandom(): string;
        static generateWithCrypto(): string;
        static setStateObjectOnQueryResults(state: any, results: QueryResults): void;
        static setStateObjectOnQueryResult(state: any, result: QueryResult): void;
        static setIndexAndUidOnQueryResults(query: Query, results: QueryResults, queryUid: string, pipeline: string, splitTestRun: string): void;
        static setTermsToHighlightOnQueryResults(query: Query, results: QueryResults): void;
        static splitFlags(flags: string, delimiter?: string): string[];
        static isAttachment(result: QueryResult): boolean;
        static containsAttachment(result: QueryResult): boolean;
        static hasHTMLVersion(result: QueryResult): boolean;
        static hasThumbnail(result: QueryResult): boolean;
        static hasExcerpt(result: QueryResult): boolean;
        static quoteAndEscapeIfNeeded(str: string): string;
        static quoteAndEscape(str: string): string;
        static escapeString(str: string): string;
        static isAtomicString(str: string): boolean;
        static isRangeString(str: string): boolean;
        static isRangeWithoutOuterBoundsString(str: string): boolean;
        static buildFieldExpression(field: string, operator: string, values: string[]): string;
        static buildFieldNotEqualExpression(field: string, values: string[]): string;
        static mergeQueryString(url: string, queryString: string): string;
        static mergePath(url: string, path: string): string;
        static setPropertyOnResults(results: QueryResults, property: string, value: any, afterOneLoop?: () => any): void;
        static setPropertyOnResult(result: QueryResult, property: string, value: any): void;
        static getUrlParameter(name: string): string;
        static isStratusAgnosticField(fieldToVerify: string, fieldToMatch: string): boolean;
    }
}
declare module Coveo {
    class StringUtils {
        static javascriptEncode(value: string): string;
        static htmlEncode(value: string): string;
        static splice(value: string, index: number, remove: number, toAdd: string): string;
        static removeMiddle(value: string, length: number, toAdd: string): string;
        static regexEncode(value: string): string;
        static stringToRegex(value: string, ignoreAccent?: boolean): string;
        static wildcardsToRegex(value: string, ignoreAccent?: boolean): string;
        static getHighlights(strToSearch: string, regexToFind: RegExp, dataHighlightGroupTerm: string): Highlight[];
        static encodeCarriageReturn(strToEncode: string): string;
        static equalsCaseInsensitive(str1: string, str2: string): boolean;
        static match(value: string, regex: RegExp): string[][];
        static hashCode(str: string): string;
        static removePunctuation(str: string): string;
        static accented: {
            [letter: string]: RegExp;
        };
    }
}
declare module Coveo.JQueryUtils {
    interface PopUpPosition {
        vertical: VerticalAlignment;
        horizontal: HorizontalAlignment;
        verticalOffset?: number;
        horizontalOffset?: number;
        horizontalClip?: boolean;
    }
    enum VerticalAlignment {
        top = 0,
        middle = 1,
        bottom = 2,
        innerTop = 3,
        innerBottom = 4,
    }
    enum HorizontalAlignment {
        left = 0,
        center = 1,
        right = 2,
        innerLeft = 3,
        innerRight = 4,
    }
    function positionPopup(popUp: JQuery, nextTo: JQuery, appendTo: JQuery, boundary: JQuery, desiredPosition: PopUpPosition, checkForBoundary?: number): void;
    function getQuickviewHeader(result: QueryResult, options: {
        showDate: boolean;
        title: string;
    }, bindings: ResultsComponentBindings): JQuery;
    function getPopUpCloseButton(captionForClose: string, captionForReminder: string): string;
    function getBasicLoadingAnimation(): HTMLDivElement;
    function getBasicLoadingDots(): HTMLDivElement;
    function getLoadingSpinner(): JQuery;
    function highlightElement(initialString: string, valueToSearch: string): string;
    function findScrollingParent(element: HTMLElement): HTMLElement;
    function htmlToDom(html: string): Element;
}
declare module Coveo {
    class HashUtils {
        private static Delimiter;
        static getHash(w?: Window): string;
        static getValue(value: string, toParse: string): any;
        static encodeValues(values: {}): string;
        private static getAjaxcrawlableHash(hash);
        private static getRawValue(value, toParse);
        private static getValueDependingOnType(paramValue);
        private static getValueType(paramValue);
        private static isArrayStartNotEncoded(value);
        private static isArrayStartEncoded(value);
        private static isArrayEndNotEncoded(value);
        private static isArrayEndEncoded(value);
        private static isObjectStartNotEncoded(value);
        private static isObjectStartEncoded(value);
        private static isObjectEndNotEncoded(value);
        private static isObjectEndEncoded(value);
        private static isObject(value);
        private static isArray(value);
        static encodeArray(array: string[]): string;
        static encodeObject(obj: Object): string;
        private static decodeObject(obj);
        private static decodeArray(value);
    }
}
declare module Coveo.MobileUtils {
    function showClickCancelingOverlay(duration: number): void;
    function showClickFeedback(element: JQuery, duration: number): void;
    function addToggleClassOnSearchInterface(direction: string, isPhonegap?: boolean): void;
    function removeToggleClassOnSearchInterface(isPhonegap?: boolean): void;
    function hideIOSKeyboard(activeElement: any): void;
}
declare module Coveo.ColorUtils {
    function hsvToRgb(h: any, s: any, v: any): number[];
    function rgbToHsv(r: any, g: any, b: any): any[];
}
declare module Coveo {
    interface EndpointError {
        message: string;
        type: string;
    }
}
declare module Coveo {
    class AjaxError implements EndpointError {
        message: string;
        status: number;
        type: any;
        constructor(message: string, status: number);
    }
}
declare module Coveo {
    class MissingAuthenticationError implements EndpointError {
        provider: string;
        type: string;
        message: string;
        isMissingAuthentication: boolean;
        constructor(provider: string);
    }
}
declare module Coveo {
    interface UserIdentity {
        name: string;
        provider: string;
        type: string;
    }
}
declare module Coveo {
    interface ComputedFieldRequest {
        field: string;
        operation: string;
    }
}
declare module Coveo {
    interface Extension {
        name: string;
        argumentNames: string[];
    }
}
declare module Coveo {
    interface FieldDescription {
        type: string;
        name: string;
        description: string;
        defaultValue: string;
        fieldType: string;
        fieldSourceType: string;
        includeInQuery: boolean;
        includeInResults: boolean;
        groupByField: boolean;
        splitGroupByField: boolean;
        sortByField: boolean;
    }
}
declare module Coveo {
    interface IndexFieldValue {
        value: string;
        lookupValue?: string;
        numberOfResults: number;
        computedFieldResults?: number[];
    }
}
declare module Coveo {
    interface GroupByRequest {
        field: string;
        lookupField?: string;
        sortCriteria?: string;
        maximumNumberOfValues?: number;
        injectionDepth?: number;
        queryOverride?: string;
        constantQueryOverride?: string;
        allowedValues?: string[];
        computedFields?: ComputedFieldRequest[];
        rangeValues?: RangeValue[];
        generateAutomaticRanges?: boolean;
        completeFacetWithStandardValues?: boolean;
    }
}
declare module Coveo {
    interface GroupByValue extends IndexFieldValue {
        value: string;
        lookupValue?: string;
        numberOfResults: number;
        score: number;
        computedFieldResults?: number[];
    }
}
declare module Coveo {
    interface Highlight {
        offset: number;
        length: number;
        dataHighlightGroup?: number;
        dataHighlightGroupTerm?: string;
    }
}
declare module Coveo {
    interface GroupByResult {
        field: string;
        values: GroupByValue[];
        globalComputedFieldResults?: number[];
    }
}
declare module Coveo {
    interface ListFieldsResult {
        fields: FieldDescription[];
    }
}
declare module Coveo {
    interface ListFieldValuesRequest {
        field: string;
        lookupField?: string;
        ignoreAccents?: boolean;
        sortCriteria?: string;
        maximumNumberOfValues?: number;
        queryOverride?: string;
        constantQueryOverride?: string;
        pattern?: string;
        patternType?: string;
    }
}
declare module Coveo {
    interface Query {
        q: string;
        aq?: string;
        cq?: string;
        dq?: string;
        searchHub?: string;
        tab?: string;
        language?: string;
        pipeline?: string;
        maximumAge?: number;
        wildcards?: boolean;
        questionMark?: boolean;
        lowercaseOperators?: boolean;
        partialMatch?: boolean;
        partialMatchKeywords?: number;
        partialMatchThreshold?: string;
        firstResult?: number;
        numberOfResults?: number;
        sortCriteria?: string;
        sortField?: string;
        filterField?: string;
        filterFieldRange?: number;
        fieldsToInclude?: string[];
        fieldsToExclude?: string[];
        excerptLength?: number;
        retrieveFirstSentences?: boolean;
        enableDidYouMean?: boolean;
        queryFunctions?: QueryFunction[];
        rankingFunctions?: RankingFunction[];
        groupBy?: GroupByRequest[];
        debug?: boolean;
        timezone?: string;
        enableDuplicateFiltering?: boolean;
        enableCollaborativeRating?: boolean;
        childField?: string;
        parentField?: string;
        context?: {
            [name: string]: any;
        };
    }
}
declare module Coveo {
    interface QueryCorrection {
        correctedQuery: string;
        wordCorrections: WordCorrection[];
    }
    interface WordCorrection {
        offset: number;
        length: number;
        originalWord: string;
        correctedWord: string;
    }
}
declare module Coveo {
    class QueryError implements EndpointError {
        status: number;
        message: string;
        type: string;
        queryExecutionReport: any;
        constructor(errorResponse: ErrorResponse);
    }
}
declare module Coveo {
    interface QueryException {
        code: string;
        context: string;
    }
}
declare module Coveo {
    interface QueryResult {
        title: string;
        titleHighlights: Highlight[];
        uri: string;
        printableUri: string;
        printableUriHighlights: Highlight[];
        clickUri: string;
        uniqueId: string;
        excerpt: string;
        excerptHighlights: Highlight[];
        firstSentences: string;
        firstSentencesHighlights: Highlight[];
        hasHtmlVersion: boolean;
        hasMobileHtmlVersion: boolean;
        flags: string;
        summary: string;
        summaryHighlights: Highlight[];
        rankingInfo: string;
        rating?: number;
        raw: any;
        parentResult?: QueryResult;
        childResults: QueryResult[];
        termsToHighlight?: {
            [originalTerm: string]: string[];
        };
        phrasesToHighlight: {
            [phrase: string]: {
                [originalTerm: string]: string[];
            };
        };
        rankingModifier?: string;
        index?: number;
        queryUid?: string;
        pipeline?: string;
        splitTestRun?: string;
        moreResults?: () => JQueryDeferred<QueryResult[]>;
        totalNumberOfChildResults?: number;
        attachments?: QueryResult[];
        state: {
            [attribute: string]: any;
        };
        orphan?: boolean;
        fields?: {
            [name: string]: any;
        };
    }
}
declare module Coveo {
    interface QueryResults {
        error?: {
            message: string;
            type: string;
            executionReport: any;
        };
        executionReport?: any;
        basicExpression?: string;
        advancedExpression?: string;
        constantExpression?: string;
        userIdentities?: UserIdentity[];
        rankingExpressions?: RankingExpression[];
        totalCount: number;
        totalCountFiltered: number;
        duration: number;
        indexDuration: number;
        proxyDuration?: number;
        clientDuration: number;
        searchUid?: string;
        pipeline?: string;
        apiVersion?: number;
        splitTestRun?: string;
        exception?: QueryException;
        results: QueryResult[];
        groupByResults: GroupByResult[];
        queryCorrections: QueryCorrection[];
        termsToHighlight: {
            [originalTerm: string]: string[];
        };
        phrasesToHighlight: {
            [originalTerm: string]: string[];
        };
        triggers: Trigger<any>[];
        _folded: boolean;
        _reusedSearchUid?: boolean;
    }
}
declare module Coveo {
    interface RangeValue {
        start?: any;
        end?: any;
        label?: string;
        endInclusive?: boolean;
    }
}
declare module Coveo {
    const SubscriptionType: {
        followQuery: string;
        followDocument: string;
    };
    interface SearchAlertsEndpointOptions {
        restUri: string;
        accessToken?: string;
        errorsAsSuccess?: boolean;
    }
    interface SearchAlertsEndpointCallOptions {
        type?: string;
        page?: number;
    }
    interface SearchAlertsEndpointSearchCallOptions {
        documentIds: string[];
    }
    interface Subscription extends SubscriptionRequest {
        id: string;
    }
    interface SubscriptionRequest {
        type: string;
        typeConfig: SubscriptionQueryRequest | SubscriptionItemRequest;
        frequency?: string;
    }
    interface SubscriptionQueryRequest {
        query: Query;
        modifiedDateField?: string;
    }
    interface SubscriptionItemRequest {
        id: string;
        title: string;
        modifiedDateField?: string;
        watchedFields?: string[];
    }
}
declare module Coveo {
    interface RankingExpression {
        expression: string;
        modifier: string;
    }
}
declare module Coveo {
    interface EndpointCallParameters {
        url: string;
        queryString: string[];
        requestData: any;
        requestDataType?: string;
        method: string;
        responseType: string;
        errorsAsSuccess: boolean;
    }
    interface Response<T> {
        data?: any;
    }
    interface SuccessResponse<T> extends Response<T> {
        duration: number;
        data: T;
    }
    interface ErrorResponse extends Response<any> {
        statusCode: number;
        data?: {
            message?: string;
            type?: string;
            executionReport?: string;
            [key: string]: any;
        };
    }
    interface EndpointCallerOptions {
        accessToken?: string;
        username?: string;
        password?: string;
    }
    class EndpointCaller {
        options: EndpointCallerOptions;
        logger: Logger;
        useJsonp: boolean;
        constructor(options?: EndpointCallerOptions);
        call<T>(params: EndpointCallParameters): JQueryPromise<Response<T>>;
        static parseURL(url: string): HTMLAnchorElement;
        static convertJsonToQueryString(json: {
            [key: string]: any;
        }): string[];
        static convertJsonToFormBody(json: {
            [key: string]: any;
        }): string;
        private callUsingXMLHttpRequest<T>(requestInfo, responseType?);
        private callUsingXDomainRequest<T>(requestInfo);
        private callUsingAjaxJsonP<T>(requestInfo);
        private handleSuccessfulResponseThatMightBeAnError<T>(requestInfo, data);
        private handleSuccess<T>(requestInfo, data);
        private handleError<T>(requestInfo, status, data);
        private combineUrlAndQueryString(url, queryString);
        private isXDomainRequestSupported();
        private isCORSSupported();
        private isSuccessHttpStatus(status);
        private tryParseResponseText(json, contentType);
        private isErrorResponseBody(data);
    }
}
declare module Coveo {
    interface SearchEndpointOptions extends EndpointCallerOptions {
        restUri?: string;
        version?: string;
        queryStringArguments?: any;
        anonymous?: boolean;
        accessToken?: string;
        renewAccessToken?: () => JQueryPromise<string>;
        username?: string;
        password?: string;
        searchAlertsUri?: string;
    }
    interface EndpointCallOptions {
        authentication?: string[];
    }
    interface GetDocumentOptions extends EndpointCallOptions {
    }
    interface ViewAsHtmlOptions extends EndpointCallOptions {
        query?: string;
        queryObject?: Query;
        requestedOutputSize?: number;
        contentType?: string;
    }
    interface SearchEndpointInterface {
        options: SearchEndpointOptions;
        getBaseUri(): string;
        getAuthenticationProviderUri(provider: string, returnUri: string, message: string): string;
        isJsonp(): boolean;
        search(query: Query, callOptions?: EndpointCallOptions): JQueryDeferred<QueryResults>;
        getExportToExcelLink(query: Query, numberOfResults: number, callOptions?: EndpointCallOptions): string;
        getRawDataStream(documentUniqueId: string, dataStreamType: string, callOptions?: ViewAsHtmlOptions): JQueryDeferred<ArrayBuffer>;
        getDocument(documentUniqueID: string, callOptions?: GetDocumentOptions): JQueryPromise<QueryResult>;
        getDocumentText(documentUniqueID: string, callOptions?: EndpointCallOptions): JQueryDeferred<string>;
        getDocumentHtml(documentUniqueID: string, callOptions?: ViewAsHtmlOptions): JQueryDeferred<HTMLDocument>;
        getViewAsHtmlUri(documentUniqueID: string, callOptions?: ViewAsHtmlOptions): string;
        getViewAsDatastreamUri(documentUniqueID: string, dataStreamType: string, callOptions?: ViewAsHtmlOptions): string;
        listFieldValues(request: ListFieldValuesRequest, callOptions?: EndpointCallOptions): JQueryDeferred<IndexFieldValue[]>;
        listFields(callOptions?: EndpointCallOptions): JQueryDeferred<FieldDescription[]>;
        extensions(callOptions?: EndpointCallOptions): JQueryDeferred<Extension[]>;
        tagDocument(taggingRequest: TaggingRequest, callOptions?: EndpointCallOptions): JQueryDeferred<boolean>;
        getRevealQuerySuggest(request: RevealQuerySuggestRequest, callOptions?: EndpointCallOptions): JQueryPromise<RevealQuerySuggestResponse>;
        rateDocument(ratingRequest: RatingRequest, callOptions?: EndpointCallOptions): JQueryDeferred<boolean>;
        follow(request: SubscriptionRequest): JQueryDeferred<Subscription>;
        listSubscriptions(page?: number): JQueryDeferred<Subscription[]>;
        updateSubscription(subscription: Subscription): JQueryDeferred<Subscription>;
        deleteSubscription(subscription: Subscription): JQueryDeferred<Subscription>;
    }
}
declare module Coveo {
    class DefaultSearchEndpointOptions implements SearchEndpointOptions {
        restUri: string;
        version: string;
        queryStringArguments: {};
        anonymous: boolean;
        accessToken: string;
        renewAccessToken: () => JQueryPromise<string>;
        username: string;
        password: string;
        searchAlertsUri: string;
    }
    class SearchEndpoint implements SearchEndpointInterface {
        options: SearchEndpointOptions;
        private handleBeforeUnload;
        static endpoints: {
            [endpoint: string]: SearchEndpoint;
        };
        static configureSampleEndpoint(options?: SearchEndpointOptions): void;
        static configureCloudEndpoint(organization?: string, token?: string, uri?: string, otherOptions?: SearchEndpointOptions): void;
        static configureOnPremiseEndpoint(uri: string, token?: string, otherOptions?: SearchEndpointOptions): void;
        static removeUndefinedConfigOption(config: SearchEndpointOptions): SearchEndpointOptions;
        static mergeConfigOptions(first: SearchEndpointOptions, second: SearchEndpointOptions): SearchEndpointOptions;
        logger: Logger;
        isRedirecting: boolean;
        protected caller: EndpointCaller;
        constructor(options?: SearchEndpointOptions);
        reset(): void;
        private static isDebugArgumentPresent();
        private static isUseLocalArgumentPresent();
        private handleUnload();
        nuke(): void;
        getBaseUri(): string;
        getAuthenticationProviderUri(provider: string, returnUri: string, message: string): string;
        isJsonp(): boolean;
        search(query: Query, callOptions?: EndpointCallOptions): JQueryDeferred<QueryResults>;
        getExportToExcelLink(query: Query, numberOfResults: number, callOptions?: EndpointCallOptions): string;
        getRawDataStream(documentUniqueId: string, dataStreamType: string, callOptions?: ViewAsHtmlOptions): JQueryDeferred<ArrayBuffer>;
        getDocument(documentUniqueID: string, callOptions?: EndpointCallOptions): JQueryPromise<QueryResult>;
        getDocumentText(documentUniqueID: string, callOptions?: EndpointCallOptions): JQueryDeferred<string>;
        getDocumentHtml(documentUniqueID: string, callOptions?: ViewAsHtmlOptions): JQueryDeferred<HTMLDocument>;
        getViewAsHtmlUri(documentUniqueID: string, callOptions?: ViewAsHtmlOptions): string;
        getViewAsDatastreamUri(documentUniqueID: string, dataStreamType: string, callOptions?: ViewAsHtmlOptions): string;
        private _batchListFieldValues;
        batchFieldValues(request: ListFieldValuesRequest, callOptions?: EndpointCallOptions): JQueryDeferred<IndexFieldValue[]>;
        listFieldValues(request: ListFieldValuesRequest, callOptions?: EndpointCallOptions): JQueryDeferred<IndexFieldValue[]>;
        listFields(callOptions?: EndpointCallOptions): JQueryDeferred<FieldDescription[]>;
        extensions(callOptions?: EndpointCallOptions): JQueryDeferred<Extension[]>;
        rateDocument(ratingRequest: RatingRequest, callOptions?: EndpointCallOptions): JQueryDeferred<boolean>;
        tagDocument(taggingRequest: TaggingRequest, callOptions?: EndpointCallOptions): JQueryDeferred<boolean>;
        getRevealQuerySuggest(request: RevealQuerySuggestRequest, callOptions?: EndpointCallOptions): JQueryPromise<RevealQuerySuggestResponse>;
        follow(request: SubscriptionRequest): JQueryDeferred<Subscription>;
        private currentListSubscriptions;
        listSubscriptions(page: number): JQueryDeferred<Subscription[]>;
        updateSubscription(subscription: Subscription): JQueryDeferred<Subscription>;
        deleteSubscription(subscription: Subscription): JQueryDeferred<Subscription>;
        protected createEndpointCaller(): void;
        private buildBaseUri(path);
        private buildSearchAlertsUri(path);
        private buildBaseQueryString(callOptions?);
        private buildCompleteQueryString(callOptions?, query?, queryObject?);
        private buildViewAsHtmlUri(path, documentUniqueID, callOptions?);
        private buildViewAsHtmlQueryString(uniqueId, callOptions?, includeQuery?);
        private callWithErrorHandling<T>(params);
        private performOneCall<T>(params, outerDeferred, autoRenewToken);
        private handleErrorResponse<T>(errorResponse, outerDeferred);
        private canRenewAccessToken();
        private isAccessTokenExpiredStatus(status);
        private renewAccessToken();
        private isMissingAuthenticationProviderStatus(status);
        private addTrailingSlash(uri);
        private removeTrailingSlash(uri);
        private hasTrailingSlash(uri);
    }
}
declare module Coveo {
    class SearchEndpointWithDefaultCallOptions implements SearchEndpointInterface {
        private endpoint;
        private callOptions;
        options: SearchEndpointOptions;
        constructor(endpoint: SearchEndpointInterface, callOptions?: EndpointCallOptions);
        getBaseUri(): string;
        getAuthenticationProviderUri(provider: string, returnUri: string, message: string): string;
        isJsonp(): boolean;
        search(query: Query, callOptions?: EndpointCallOptions): JQueryDeferred<QueryResults>;
        getExportToExcelLink(query: Query, numberOfResults: number, callOptions?: EndpointCallOptions): string;
        tagDocument(taggingRequest: TaggingRequest, callOptions?: EndpointCallOptions): JQueryDeferred<boolean>;
        getRevealQuerySuggest(request: RevealQuerySuggestRequest, callOptions?: EndpointCallOptions): JQueryPromise<RevealQuerySuggestResponse>;
        rateDocument(ratingRequest: RatingRequest, callOptions?: EndpointCallOptions): JQueryDeferred<boolean>;
        getRawDataStream(documentUniqueId: string, dataStreamType: string, callOptions?: ViewAsHtmlOptions): JQueryDeferred<ArrayBuffer>;
        getDocument(documentUniqueId: string, callOptions?: GetDocumentOptions): JQueryPromise<QueryResult>;
        getDocumentText(documentUniqueID: string, callOptions?: EndpointCallOptions): JQueryDeferred<string>;
        getDocumentHtml(documentUniqueID: string, callOptions?: ViewAsHtmlOptions): JQueryDeferred<HTMLDocument>;
        getViewAsHtmlUri(documentUniqueID: string, callOptions?: ViewAsHtmlOptions): string;
        getViewAsDatastreamUri(documentUniqueID: string, dataStreamType: string, callOptions?: ViewAsHtmlOptions): string;
        listFieldValues(request: ListFieldValuesRequest, callOptions?: EndpointCallOptions): JQueryDeferred<IndexFieldValue[]>;
        listFields(callOptions?: EndpointCallOptions): JQueryDeferred<FieldDescription[]>;
        extensions(callOptions?: EndpointCallOptions): JQueryDeferred<Extension[]>;
        follow(request: SubscriptionRequest): JQueryDeferred<Subscription>;
        listSubscriptions(page: number): JQueryDeferred<Subscription[]>;
        updateSubscription(subscription: Subscription): JQueryDeferred<Subscription>;
        deleteSubscription(subscription: Subscription): JQueryDeferred<Subscription>;
        private enrichCallOptions<T>(callOptions?);
    }
}
declare module Coveo {
    interface GenericParam {
        [paramName: string]: any;
    }
}
declare module Coveo {
    interface AnalyticsEvent {
        actionCause: string;
        actionType: string;
        username?: string;
        userDisplayName?: string;
        anonymous?: boolean;
        device: string;
        mobile: boolean;
        originLevel1: string;
        originLevel2: string;
        originLevel3?: string;
        language: string;
        responseTime: number;
        userAgent?: string;
        userGroups?: string;
        customData?: {
            [key: string]: string;
        };
    }
}
declare module Coveo {
    interface ClickEvent extends AnalyticsEvent {
        searchQueryUid: string;
        queryPipeline: string;
        splitTestRunName: string;
        splitTestRunVersion: string;
        documentUri: string;
        documentUriHash: string;
        documentUrl: string;
        documentTitle: string;
        collectionName: string;
        sourceName: string;
        documentPosition: number;
        viewMethod: string;
        rankingModifier: string;
    }
}
declare module Coveo {
    interface APICustomEvent {
        language: string;
        device: string;
        searchInterface: string;
        searchHub: string;
        responseTime: number;
        actionType: string;
        actionCause: string;
        customMetadatas: {
            [name: string]: string;
        };
    }
}
declare module Coveo {
    interface APIDocumentViewEvent {
        language: string;
        device: string;
        searchInterface: string;
        searchHub: string;
        responseTime: number;
        searchQueryUid: string;
        title: string;
        documentUrl: string;
        documentUri: string;
        documentUriHash: string;
        viewMethod: string;
        actionCause: string;
        queryPipeline: string;
        splitTestRunName: string;
        splitTestRunVersion: string;
        collectionName: string;
        sourceName: string;
        documentPosition: number;
        customMetadatas: {
            [name: string]: string;
        };
    }
}
declare module Coveo {
    interface APISearchEvent {
        language: string;
        device: string;
        searchInterface: string;
        searchHub: string;
        responseTime: number;
        customMetadatas: {
            [name: string]: string;
        };
        queryText: string;
        advancedQuery: string;
        didYouMean: boolean;
        numberOfResults: number;
        resultsPerPage: number;
        pageNumber: number;
        type: string;
        actionCause: string;
        queryPipeline: string;
        splitTestRunName: string;
        splitTestRunVersion: string;
        searchQueryUid: string;
    }
}
declare module Coveo {
    interface APIAnalyticsFacet {
        name: string;
        fieldName: string;
        sort: string;
        mode: string;
        selections: APIAnalyticsFacetSelection[];
    }
}
declare module Coveo {
    interface APIAnalyticsSearchEventsResponse {
        searchEventResponses: APIAnalyticsEventResponse[];
    }
}
declare module Coveo {
    interface APIAnalyticsVisitResponseRest {
        id: string;
    }
}
declare module Coveo {
    interface APIAnalyticsEventResponse {
        visitId: string;
    }
}
declare module Coveo {
    interface APIAnalyticsFacetSelection {
        entryName: string;
        status: string;
    }
}
declare module Coveo {
    interface SearchEvent extends AnalyticsEvent {
        searchQueryUid: string;
        queryPipeline: string;
        splitTestRunName: string;
        splitTestRunVersion: string;
        mobile: boolean;
        queryText: string;
        numberOfResults: number;
        responseTime: number;
        resultsPerPage: number;
        pageNumber: number;
        advancedQuery: string;
        didYouMean: boolean;
        contextual: boolean;
    }
}
declare module Coveo {
    interface TopQueries extends GenericParam {
        pageSize: number;
        queryText: string;
    }
}
declare module Coveo {
    interface CustomEvent extends AnalyticsEvent {
        eventType: string;
        eventValue: string;
    }
}
declare module Coveo {
    interface QueryFunction {
        "function": string;
        fieldName: string;
    }
}
declare module Coveo {
    interface RankingFunction {
        expression: string;
        normalizeWeight: boolean;
    }
}
declare module Coveo {
    interface TaggingRequest {
        fieldName: string;
        fieldValue: string;
        doAdd: boolean;
        uniqueId: string;
    }
}
declare module Coveo {
    interface Trigger<T> {
        type: string;
        content: T;
    }
    interface TriggerNotify extends Trigger<string> {
    }
    interface TriggerRedirect extends Trigger<string> {
    }
    interface TriggerQuery extends Trigger<string> {
    }
    interface TriggerExecute extends Trigger<{
        name: string;
        params: any[];
    }> {
    }
}
declare module Coveo {
    interface RatingRequest {
        uniqueId: string;
        rating: string;
    }
}
declare module Coveo {
    interface RevealQuerySuggestCompletion {
        expression: string;
        score: number;
        highlighted: string;
    }
    interface RevealQuerySuggestResponse {
        completions: RevealQuerySuggestCompletion[];
    }
    interface RevealQuerySuggestRequest {
        q: string;
        count?: number;
        language?: string;
        autoCompleter?: string;
        additionalData?: any;
        format?: string;
    }
}
declare module Coveo {
    interface InitializationParameters {
        options: any;
        result?: QueryResult;
        bindings: ComponentBindings;
    }
    class CoveoJQuery {
        private static logger;
        private static autoCreateComponents;
        private static namedMethods;
        static registerDefaultOptions(element: HTMLElement, options: {}): void;
        static resolveDefaultOptions(element: HTMLElement, options: {}): {};
        static registerAutoCreateComponent(componentClass: ComponentClass): void;
        static isComponentClassIdRegistered(componentClassId: string): boolean;
        static getListOfRegistredComponents(): string[];
        static getRegistredComponent(name: string): ComponentClass;
        static initializeFramework(element: HTMLElement, options?: any, initSearchInterfaceFunction?: (...args: any[]) => void): void;
        static nuke(element: HTMLElement): void;
        private static logFirstQueryCause(searchInterface);
        private static performInitFunctionsOption(options, event);
        private static performPreInitFunctions(options);
        private static performPostInitFunction(options);
        private static performFunctions(option);
        static initSearchInterface(element: HTMLElement, options?: any): void;
        static initStandaloneSearchInterface(element: HTMLElement, options?: any): void;
        static initBoxInterface(element: HTMLElement, options?: any, type?: string, injectMarkup?: boolean): void;
        private static initExternalComponents(element, options?);
        static automaticallyCreateComponentsInside(element: HTMLElement, initParameters: InitializationParameters, ignore?: string[]): void;
        private static createFunctionThatInitializesComponentOnElements(elements, componentClassId, componentClass, initParameters);
        static createComponentOfThisClassOnElement(componentClassId: string, element: HTMLElement, initParameters?: InitializationParameters): Component;
        static registerNamedMethod(methodName: string, handler: (element: HTMLElement, ...args: any[]) => any): void;
        static isNamedMethodRegistered(methodName: string): boolean;
        static dispatchNamedMethodCall(methodName: string, element: HTMLElement, args: any[]): any;
        static isThereASingleComponentBoundToThisElement(element: HTMLElement): boolean;
        static dispatchMethodCallOnBoundComponent(methodName: string, element: HTMLElement, args: any[]): any;
        static dispatchNamedMethodCallOrComponentCreation(token: string, element: HTMLElement, args: any[]): any;
        static monkeyPatchComponentMethod(methodName: string, element: HTMLElement, handler: (...args: any[]) => any): void;
        static noConflict(): void;
    }
}
declare module Coveo {
    interface ComponentClass {
        ID: string;
        className?: string;
        new (element: HTMLElement, options: any, bindings: ComponentBindings, ...args: any[]): Component;
        options?: any;
        parent?: ComponentClass;
        fields?: string[];
    }
    interface ComponentBindings {
        root?: HTMLElement;
        queryStateModel?: QueryStateModel;
        componentStateModel?: ComponentStateModel;
        queryController?: QueryController;
        searchInterface?: SearchInterface;
        usageAnalytics?: AnalyticsClient;
        componentOptionsModel?: ComponentOptionsModel;
    }
    interface ResultsComponentBindings extends ComponentBindings {
        resultElement: HTMLElement;
    }
    class Component implements ComponentBindings {
        element: HTMLElement;
        type: string;
        logger: Logger;
        disabled: boolean;
        bind: ComponentEvents;
        root: HTMLElement;
        queryStateModel: QueryStateModel;
        componentStateModel: ComponentStateModel;
        queryController: QueryController;
        searchInterface: SearchInterface;
        usageAnalytics: AnalyticsClient;
        componentOptionsModel: ComponentOptionsModel;
        ensureDom: Function;
        constructor(element: HTMLElement, type: string, bindings?: ComponentBindings);
        getBindings(): ComponentBindings;
        private initDebugInfo();
        debugInfo(): any;
        enable(): void;
        disable(): void;
        createDom(): void;
        resolveSearchInterface(): SearchInterface;
        resolveRoot(defaultValue?: HTMLElement): HTMLElement;
        resolveQueryController(defaultValue?: QueryController): QueryController;
        resolveComponentStateModel(defaultValue?: ComponentStateModel): ComponentStateModel;
        resolveQueryStateModel(defaultValue?: QueryStateModel): QueryStateModel;
        resolveComponentOptionsModel(defaultValue?: ComponentOptionsModel): ComponentOptionsModel;
        resolveUA(): AnalyticsClient;
        resolveResult(): QueryResult;
        isInstanceOf(component: string): boolean;
        static getComponentRef(component: string): any;
        static get(element: HTMLElement, componentClass?: any, noThrow?: boolean): Component;
        static getResult(element: HTMLElement, noThrow?: boolean): QueryResult;
        static bindComponentToElement(element: HTMLElement, component: Component): void;
        static bindResultToElement(element: HTMLElement, result: QueryResult): void;
        static resolveBinding(element: HTMLElement, componentClass: any): Component;
        static computeCssClassNameForType(type: string): string;
        static computeCssClassName(componentClass: ComponentClass): string;
        static computeSelectorForType(type: string): string;
        static computeMemberNameForType(type: string): string;
        static pointElementsToDummyForm(selector: JQuery): void;
        private static getBoundComponentsForElement(element);
    }
    var context: any;
}
interface JQuery {
    coveo(method: 'get', componentClass?: any, noThrow?: boolean): Coveo.Component;
    coveo(method: 'result', noThrow?: boolean): Coveo.Component;
}
declare module Coveo {
    class ComponentEvents {
        owner: Component;
        constructor(owner: Component);
        on(selector: JQuery, event: string, handler: Function): void;
        onRoot<T>(event: string, handler: (e: JQueryEventObject, args: T) => any): void;
        click(selector: JQuery, handler: (e: JQueryEventObject) => any): void;
        trigger(selector: JQuery, event: string, args?: Object): void;
        private wrapToCallIfEnabled(func);
    }
}
declare module Coveo.ComponentOptions {
    interface LoadOption<T> {
        (element: HTMLElement, name: string, option: Option<T>): T;
    }
    interface PostProcessing<T> {
        (value: T, options: any): T;
    }
    interface Option<T> extends OptionArgs<T> {
        type?: Type;
        load?: LoadOption<T>;
    }
    interface OptionArgs<T> {
        defaultValue?: T;
        defaultFunction?: (element: HTMLElement) => T;
        required?: boolean;
        postProcessing?: PostProcessing<T>;
        attrName?: string;
    }
    interface NumberOption extends Option<number>, NumberOptionArgs {
    }
    interface NumberOptionArgs extends OptionArgs<number> {
        min?: number;
        max?: number;
        float?: boolean;
    }
    interface ListOption extends Option<string[]>, ListOptionArgs {
    }
    interface ListOptionArgs extends OptionArgs<string[]> {
        separator?: RegExp;
        values?: any;
    }
    interface ChildHtmlElementOption extends Option<HTMLElement>, ChildHtmlElementOptionArgs {
    }
    interface ChildHtmlElementOptionArgs extends OptionArgs<HTMLElement> {
        selectorAttr?: string;
        childSelector?: string;
    }
    interface TemplateOption extends Option<Template>, TemplateOptionArgs {
    }
    interface TemplateOptionArgs extends OptionArgs<Template> {
        selectorAttr?: string;
        childSelector?: string;
        idAttr?: string;
        lazy?: boolean;
    }
    interface FieldOption extends Option<string>, FieldOptionArgs {
    }
    interface FieldOptionArgs extends OptionArgs<string> {
        groupByField?: boolean;
        includeInResults?: boolean;
        sortByField?: boolean;
        splitGroupByField?: boolean;
        match?: (field: FieldDescription) => boolean;
    }
    interface FieldsOption extends Option<string[]>, FieldsOptionArgs {
    }
    interface FieldsOptionArgs extends OptionArgs<string[]> {
        groupByField?: boolean;
        includeInResults?: boolean;
        sortByField?: boolean;
        splitGroupByField?: boolean;
        match?: (field: FieldDescription) => boolean;
    }
    interface ObjectOption extends Option<{
        [key: string]: any;
    }>, ObjectOptionArgs {
    }
    interface ObjectOptionArgs extends OptionArgs<{
        [key: string]: any;
    }> {
        subOptions: {
            [key: string]: Option<any>;
        };
    }
    enum Type {
        BOOLEAN = 0,
        NUMBER = 1,
        STRING = 2,
        LOCALIZED_STRING = 3,
        LIST = 4,
        SELECTOR = 5,
        CHILD_HTML_ELEMENT = 6,
        TEMPLATE = 7,
        FIELD = 8,
        FIELDS = 9,
        ICON = 10,
        OBJECT = 11,
        QUERY = 12,
        HELPER = 13,
        LONG_STRING = 14,
        JSON = 15,
        JAVASCRIPT = 16,
        NONE = 17,
    }
    function buildBooleanOption(optionArgs?: OptionArgs<boolean>): boolean;
    function buildNumberOption(optionArgs?: NumberOptionArgs): number;
    function buildStringOption(optionArgs?: OptionArgs<string>): string;
    function buildIconOption(optionArgs?: OptionArgs<string>): string;
    function buildHelperOption(optionArgs?: OptionArgs<string>): string;
    function buildJsonOption(optionArgs?: OptionArgs<string>): string;
    function buildLocalizedStringOption(optionArgs?: OptionArgs<string>): string;
    function buildFieldOption(optionArgs?: FieldOptionArgs): string;
    function buildFieldsOption(optionArgs?: FieldsOptionArgs): string[];
    function buildListOption(optionArgs?: ListOptionArgs): string[];
    function buildSelectorOption(optionArgs?: OptionArgs<HTMLElement>): HTMLElement;
    function buildChildHtmlElementOption(optionArgs?: ChildHtmlElementOptionArgs): HTMLElement;
    function buildTemplateOption(optionArgs?: TemplateOptionArgs): Template;
    function buildCustomOption<T>(converter: (value: string) => T, optionArgs?: OptionArgs<T>): T;
    function buildCustomListOption<T>(converter: (value: string[]) => T, optionArgs?: ListOptionArgs): T;
    function buildObjectOption(optionArgs?: ObjectOptionArgs): any;
    function buildOption<T>(type: Type, load: LoadOption<T>, optionArg?: OptionArgs<T>): T;
    function attrNameFromName(name: string, optionArgs?: OptionArgs<any>): string;
    function camelCaseToHyphen(name: string): string;
    function mergeCamelCase(parent: string, name: string): string;
    function initComponentOptions(element: HTMLElement, component: ComponentClass, values?: any): any;
    function initOptions(element: HTMLElement, options: {
        [name: string]: Option<any>;
    }, values?: any): any;
    function loadStringOption(element: HTMLElement, name: string, option: Option<any>): string;
    function loadFieldOption(element: HTMLElement, name: string, option: Option<any>): string;
    function loadFieldsOption(element: HTMLElement, name: string, option: Option<any>): string[];
    function loadLocalizedStringOption(element: HTMLElement, name: string, option: Option<any>): string;
    function loadNumberOption(element: HTMLElement, name: string, option: NumberOption): number;
    function loadBooleanOption(element: HTMLElement, name: string, option: Option<any>): boolean;
    function loadListOption(element: HTMLElement, name: string, option: ListOption): string[];
    function loadEnumOption(element: HTMLElement, name: string, option: Option<any>, _enum: any): number;
    function loadSelectorOption(element: HTMLElement, name: string, option: Option<any>): HTMLElement;
    function loadChildHtmlElementOption(element: HTMLElement, name: string, option: ChildHtmlElementOption): HTMLElement;
    function loadChildHtmlElementFromSelector(element: HTMLElement, selector: string): HTMLElement;
    function loadChildrenHtmlElementFromSelector(element: HTMLElement, selector: string): HTMLElement[];
    function loadTemplateOption(element: HTMLElement, name: string, option: TemplateOption): Coveo.Template;
    function loadResultTemplateFromId(templateId: string): Coveo.Template;
    function loadChildrenResultTemplateFromSelector(element: HTMLElement, selector: string): Coveo.Template;
    function findParentScrolling(element: HTMLElement): HTMLElement;
    function isElementScrollable(element: HTMLElement): boolean;
    function createResultTemplateFromElement(element: HTMLElement): Template;
}
declare module Coveo {
    interface QueryBuilderExpression {
        full?: string;
        withoutConstant?: string;
        constant?: string;
    }
    class QueryBuilder {
        expression: ExpressionBuilder;
        advancedExpression: ExpressionBuilder;
        constantExpression: ExpressionBuilder;
        disjunctionExpression: ExpressionBuilder;
        searchHub: string;
        tab: string;
        language: string;
        pipeline: string;
        maximumAge: number;
        enableWildcards: boolean;
        enableQuestionMarks: boolean;
        enableLowercaseOperators: boolean;
        enablePartialMatch: boolean;
        partialMatchKeywords: number;
        partialMatchThreshold: string;
        firstResult: number;
        numberOfResults: number;
        excerptLength: number;
        filterField: string;
        filterFieldRange: number;
        parentField: string;
        childField: string;
        fieldsToInclude: string[];
        requiredFields: string[];
        includeRequiredFields: boolean;
        fieldsToExclude: string[];
        enableDidYouMean: boolean;
        enableDebug: boolean;
        enableCollaborativeRating: boolean;
        sortCriteria: string;
        sortField: string;
        retrieveFirstSentences: boolean;
        timezone: string;
        queryUid: string;
        queryFunctions: QueryFunction[];
        rankingFunctions: RankingFunction[];
        groupByRequests: GroupByRequest[];
        enableDuplicateFiltering: boolean;
        context: {
            [key: string]: any;
        };
        build(): Query;
        computeCompleteExpression(): string;
        computeCompleteExpressionParts(): QueryBuilderExpression;
        computeCompleteExpressionExcept(except: string): string;
        computeCompleteExpressionPartsExcept(except: string): QueryBuilderExpression;
        addFieldsToInclude(fields: string[]): void;
        addRequiredFields(fields: string[]): void;
        computeFieldsToInclude(): string[];
        addContextValue(key: string, value: any): void;
        addContext(values: {
            [key: string]: any;
        }): void;
    }
}
declare module Coveo {
    class ExpressionBuilder {
        private parts;
        wrapParts: boolean;
        add(expression: string): void;
        fromExpressionBuilder(expression: ExpressionBuilder): void;
        addFieldExpression(field: string, operator: string, values: string[]): void;
        addFieldNotEqualExpression(field: string, values: string[]): void;
        remove(expression: string): void;
        isEmpty(): boolean;
        build(exp?: string): string;
        static merge(...builders: ExpressionBuilder[]): ExpressionBuilder;
        static mergeUsingOr(...builders: ExpressionBuilder[]): ExpressionBuilder;
    }
}
declare module Coveo {
    class Template {
        dataToString: (object?: any) => string;
        condition: Function;
        static getFieldFromString(text: string): string[];
        private logger;
        constructor(dataToString?: (object?: any) => string, condition?: Function);
        instantiateToString(object?: any, checkCondition?: boolean): string;
        instantiateToElement(object?: any, checkCondition?: boolean): HTMLElement;
        toHtmlElement(): HTMLElement;
        getFields(): string[];
        getType(): string;
    }
}
declare module Coveo {
    class DefaultResultTemplate extends Template {
        constructor();
        instantiateToString(queryResult?: QueryResult): string;
        instantiateToElement(queryResult?: QueryResult): HTMLElement;
        getFields(): any[];
        getType(): string;
    }
}
declare module Coveo {
    class UnderscoreTemplate extends Template {
        element: HTMLElement;
        private template;
        static templateHelpers: {
            [templateName: string]: TemplateHelperFunction;
        };
        private fields;
        static mimeTypes: string[];
        constructor(element: HTMLElement);
        toHtmlElement(): HTMLElement;
        getType(): string;
        static create(element: HTMLElement): UnderscoreTemplate;
        static fromString(template: string, condition?: string): UnderscoreTemplate;
        getFields(): string[];
        static registerTemplateHelper(helperName: string, helper: TemplateHelperFunction): void;
        static isLibraryAvailable(): boolean;
    }
}
declare module Coveo {
    class HtmlTemplate extends Coveo.Template {
        element: HTMLElement;
        static mimeTypes: string[];
        private fields;
        constructor(element: HTMLElement);
        toHtmlElement(): HTMLElement;
        getType(): string;
        getFields(): string[];
        static create(element: HTMLElement): HtmlTemplate;
        static fromString(template: string, condition?: string): HtmlTemplate;
    }
}
declare module Coveo {
    class TemplateCache {
        private static templates;
        private static templateNames;
        private static defaultTemplates;
        static registerTemplate(name: string, template: Template, publicTemplate?: boolean, defaultTemplate?: boolean): any;
        static registerTemplate(name: string, template: (data: {}) => string, publicTemplate?: boolean, defaultTemplate?: boolean): any;
        static getTemplate(name: string): Template;
        static getTemplates(): {
            [templateName: string]: Template;
        };
        static getTemplateNames(): string[];
        static getDefaultTemplates(): string[];
        static getDefaultTemplate(name: string): Template;
        static scanAndRegisterTemplates(): void;
        private static scanAndRegisterUnderscoreTemplates();
        private static scanAndRegisterHtmlTemplates();
    }
}
declare module Coveo {
    class LazyTemplate extends Template {
        private element;
        private attrName;
        private option;
        private template;
        constructor(element: HTMLElement, attrName: string, option: ComponentOptions.TemplateOption);
        instantiateToString(object?: any, checkCondition?: boolean): string;
        getType(): string;
    }
}
declare module Coveo {
    class TemplateList extends Template {
        private templates;
        constructor(templates: Template[]);
        instantiateToString(object?: any, checkCondition?: boolean): string;
        instantiateToElement(object?: any, checkCondition?: boolean): HTMLElement;
        getFields(): string[];
        getType(): string;
    }
}
declare module Coveo {
    interface TemplateHelperFunction {
        (...args: any[]): string;
    }
    class TemplateHelpers {
        private static helpers;
        static fieldHelpers: string[];
        static registerFieldHelper<T1>(name: string, helper: (value: string, options?: any) => string): void;
        static registerTemplateHelper<T1>(name: string, helper: (arg1: T1) => string): any;
        static registerTemplateHelper<T1, T2>(name: string, helper: (arg1: T1, arg2: T2) => string): any;
        static registerTemplateHelper<T1, T2, T3>(name: string, helper: (arg1: T1, arg2: T2, arg3: T3) => string): any;
        static registerTemplateHelper<T1, T2, T3, T4>(name: string, helper: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => string): any;
        static registerTemplateHelper<T1, T2, T3, T4, T5>(name: string, helper: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => string): any;
        static getHelper(name: string): TemplateHelperFunction;
        static getHelpers(): {
            [templateName: string]: TemplateHelperFunction;
        };
        private static registerTemplateHelperInUnderscore(name, helper);
    }
}
declare module Coveo {
    interface AnalyticsCustomData {
        [key: string]: string;
    }
    interface AnalyticsClient {
        isContextual: boolean;
        isActivated(): boolean;
        getCurrentEventCause(): string;
        getCurrentEventMeta(): {
            [key: string]: any;
        };
        logSearchEvent<TMeta>(actionCause: AnalyticsActionCause, meta: TMeta): void;
        logSearchAsYouType<TMeta>(actionCause: AnalyticsActionCause, meta: TMeta): void;
        logClickEvent(actionCause: AnalyticsActionCause, meta: AnalyticsDocumentViewMeta, result: QueryResult, element: HTMLElement): void;
        logCustomEvent<TMeta>(actionCause: AnalyticsActionCause, meta: TMeta, element: HTMLElement): void;
        getTopQueries(params: TopQueries): JQueryPromise<string[]>;
        getCurrentVisitIdDeferred(): JQueryPromise<string>;
        getCurrentVisitId(): string;
        sendAllPendingEvents(): void;
        warnAboutSearchEvent(): void;
    }
}
declare module Coveo {
    interface AnalyticsActionCause {
        name: string;
        type: string;
        metaMap?: {
            [name: string]: number;
        };
    }
    interface AnalyticsNoMeta {
    }
    interface AnalyticsInterfaceChange {
        interfaceChangeTo: string;
    }
    interface AnalyticsContextAddMeta {
        contextName: string;
    }
    interface AnalyticsContextRemoveMeta {
        contextName: string;
    }
    interface AnalyticsResultsSortMeta {
        resultsSortBy: string;
    }
    interface AnalyticsDocumentViewMeta {
        documentURL?: string;
        documentTitle?: string;
        author: string;
    }
    interface AnalyticsFacetMeta {
        facetId: string;
        facetValue?: string;
        facetTitle: string;
    }
    interface AnalyticsQueryErrorMeta {
        query: string;
        aq: string;
        cq: string;
        dq: string;
        errorType: string;
        errorMessage: string;
    }
    interface AnalyticsTopSuggestionMeta {
        suggestionRanking: number;
        partialQueries: string;
        suggestions: string;
        partialQuery: string;
    }
    interface AnalyticsOmniboxSuggestionMeta {
        suggestionRanking: number;
        partialQueries: string;
        suggestions: string;
        partialQuery: string;
    }
    interface AnalyticsFacetSliderChangeMeta {
        facetId: string;
        facetRangeStart: any;
        facetRangeEnd: any;
    }
    interface AnalyticsFacetGraphSelectedMeta extends AnalyticsFacetSliderChangeMeta {
    }
    interface AnalyticsFacetOperatorMeta extends AnalyticsFacetMeta {
        facetOperatorBefore: string;
        facetOperatorAfter: string;
    }
    interface AnalyticsPreferencesChangeMeta {
        preferenceName: string;
        preferenceType: string;
    }
    interface AnalyticsCustomFiltersChangeMeta {
        customFilterName: string;
        customFilterType: string;
        customFilterExpression: string;
    }
    interface AnalyticsCaseAttachMeta {
        resultUriHash: string;
        articleID: string;
        caseID: string;
        author: string;
    }
    interface AnalyticsCaseContextAddMeta {
        caseID: string;
    }
    interface AnalyticsCaseContextRemoveMeta {
        caseID: string;
    }
    interface AnalyticsCaseDetachMeta extends AnalyticsCaseAttachMeta {
    }
    interface AnalyticsCaseCreationInputChangeMeta {
        inputTitle: string;
    }
    interface AnalyticsCaseCreationDeflectionMeta {
        hasClicks: boolean;
    }
    interface AnalyticsPagerMeta {
        pagerNumber: number;
    }
    interface AnalyticsTriggerNotify {
        notification: string;
    }
    interface AnalyticsTriggerRedirect {
        redirectedTo: string;
    }
    interface AnalyticsTriggerQuery {
        query: string;
    }
    interface AnalyticsTriggerExecute {
        executed: string;
    }
    var AnalyticsActionCauseList: {
        interfaceLoad: AnalyticsActionCause;
        interfaceChange: AnalyticsActionCause;
        contextRemove: AnalyticsActionCause;
        didyoumeanAutomatic: AnalyticsActionCause;
        didyoumeanClick: AnalyticsActionCause;
        resultsSort: AnalyticsActionCause;
        searchboxSubmit: AnalyticsActionCause;
        searchboxClear: AnalyticsActionCause;
        searchboxAsYouType: AnalyticsActionCause;
        breadcrumbFacet: AnalyticsActionCause;
        breadcrumbResetAll: AnalyticsActionCause;
        documentTag: AnalyticsActionCause;
        documentField: AnalyticsActionCause;
        documentQuickview: AnalyticsActionCause;
        documentOpen: AnalyticsActionCause;
        omniboxFacet: AnalyticsActionCause;
        omniboxAnalytics: AnalyticsActionCause;
        omniboxField: AnalyticsActionCause;
        facetClearAll: AnalyticsActionCause;
        facetSearch: AnalyticsActionCause;
        facetToggle: AnalyticsActionCause;
        facetRangeSlider: AnalyticsActionCause;
        facetRangeGraph: AnalyticsActionCause;
        facetSelect: AnalyticsActionCause;
        facetSelectAll: AnalyticsActionCause;
        facetDeselect: AnalyticsActionCause;
        facetExclude: AnalyticsActionCause;
        facetUnexclude: AnalyticsActionCause;
        errorBack: AnalyticsActionCause;
        errorClearQuery: AnalyticsActionCause;
        errorRetry: AnalyticsActionCause;
        noResultsBack: AnalyticsActionCause;
        expandToFullUI: AnalyticsActionCause;
        caseCreationInputChange: AnalyticsActionCause;
        caseCreationSubmitButton: AnalyticsActionCause;
        caseCreationCancelButton: AnalyticsActionCause;
        caseCreationUnloadPage: AnalyticsActionCause;
        casecontextAdd: AnalyticsActionCause;
        casecontextRemove: AnalyticsActionCause;
        preferencesChange: AnalyticsActionCause;
        getUserHistory: AnalyticsActionCause;
        caseAttach: AnalyticsActionCause;
        caseDetach: AnalyticsActionCause;
        customfiltersChange: AnalyticsActionCause;
        pagerNumber: AnalyticsActionCause;
        pagerNext: AnalyticsActionCause;
        pagerPrevious: AnalyticsActionCause;
        pagerScrolling: AnalyticsActionCause;
        searchFromLink: AnalyticsActionCause;
        triggerNotify: AnalyticsActionCause;
        triggerExecute: AnalyticsActionCause;
        triggerQuery: AnalyticsActionCause;
        triggerRedirect: AnalyticsActionCause;
        queryError: AnalyticsActionCause;
        exportToExcel: AnalyticsActionCause;
    };
}
declare module Coveo {
    class NoopAnalyticsClient implements AnalyticsClient {
        isContextual: boolean;
        isActivated(): boolean;
        getCurrentEventCause(): string;
        getCurrentEventMeta(): {
            [key: string]: any;
        };
        logSearchEvent<TMeta>(actionCause: AnalyticsActionCause, meta: TMeta): void;
        logSearchAsYouType<TMeta>(actionCause: AnalyticsActionCause, meta: TMeta): void;
        logClickEvent<TMeta>(actionCause: AnalyticsActionCause, meta: TMeta, result?: QueryResult, element?: HTMLElement): void;
        logCustomEvent<TMeta>(actionCause: AnalyticsActionCause, meta: TMeta, element?: HTMLElement): void;
        getTopQueries(params: TopQueries): JQueryDeferred<string[]>;
        getCurrentVisitIdDeferred(): JQueryPromise<string>;
        getCurrentVisitId(): string;
        sendAllPendingEvents(): void;
        warnAboutSearchEvent(): void;
    }
}
declare module Coveo {
    interface SearchAlertEventArgs {
        subscription: Subscription;
        dom?: HTMLElement;
    }
    interface SearchAlertsFailEventArgs {
        dom?: HTMLElement;
    }
    class SearchAlertEvents {
        static searchAlertCreated: string;
        static searchAlertDeleted: string;
        static SearchAlertsFail: string;
    }
}
declare module Coveo {
    interface SearchAlertMessageOptions {
        closeDelay: number;
    }
    class SearchAlertMessage extends Component {
        element: HTMLElement;
        options: SearchAlertMessageOptions;
        bindings: ComponentBindings;
        static ID: string;
        private message;
        private closeTimeout;
        constructor(element: HTMLElement, options: SearchAlertMessageOptions, bindings?: ComponentBindings);
        getCssClass(): string;
        private showMessage(dom, message, error);
        private handleSubscriptionCreated(e, args);
        private handleSearchAlerts_Fail(e, args);
        private startCloseDelay();
        private stopCloseDelay();
        private close();
    }
}
declare module Coveo {
    interface ModelSetOptions {
        silent?: boolean;
        customAttribute?: boolean;
        validateType?: boolean;
    }
    interface AttributeChangedEventArg {
        attribute: string;
        value: any;
    }
    interface AttributesChangedEventArg {
        attributes: {};
    }
    interface ModelChangedEventArg {
        model: Model;
    }
    class Model extends Component {
        attributes: {
            [key: string]: any;
        };
        defaultAttributes: {
            [key: string]: any;
        };
        private eventNameSpace;
        static eventTypes: {
            preprocess: string;
            changeOne: string;
            change: string;
            reset: string;
            all: string;
        };
        constructor(element: HTMLElement, id: string, attributes: {
            [key: string]: any;
        }, bindings?: ComponentBindings);
        set(attribute: string, value: any, options?: ModelSetOptions): void;
        getAttributes(): {
            [key: string]: any;
        };
        setMultiple(toSet: {
            [key: string]: any;
        }, options?: ModelSetOptions): void;
        setNewDefault(attribute: string, value: any, options?: ModelSetOptions): void;
        setDefault(attribute: string, options?: ModelSetOptions): void;
        get(attribute?: string): any;
        getDefault(attribute?: string): any;
        reset(): void;
        registerNewAttribute(attribute: string, defaultValue: any): void;
        getEventName(event: string): string;
        private attributesHasChangedEvent();
        private attributeHasChangedEvent(attr);
        private preprocessEvent(attributes);
        private modelWasResetEvent();
        private anyEvent();
        private createAttributeChangedArgument(attribute);
        private createAttributesChangedArgument();
        private createModelChangedArgument();
        private checkIfAttributeExists(attribute);
        private validateType(attribute, value);
        private parseToCorrectType(attribute, value);
        private checkIfAttributeChanged(attribute, newValue);
        debugInfo(): any;
    }
}
declare module Coveo {
    interface QueryStateAttributes {
        q: string;
        first: number;
        t: string;
        tg: string;
        sort: string;
        hd: string;
        hq: string;
        quickview: string;
    }
    interface QueryStateIncludedAttribute {
        title: string;
        included: string[];
    }
    interface QueryStateExcludedAttribute {
        title: string;
        excluded: string[];
    }
    class QueryStateModel extends Model {
        static ID: string;
        static defaultAttributes: QueryStateAttributes;
        static attributesEnum: {
            q: string;
            first: string;
            t: string;
            sort: string;
            hd: string;
            hq: string;
            tg: string;
            quickview: string;
        };
        static getFacetId(id: string, include?: boolean): string;
        static getFacetOperator(id: string): string;
        static getFacetLookupValue(id: string): string;
        constructor(element: HTMLElement, attributes?: QueryStateAttributes, bindings?: ComponentBindings);
        atLeastOneFacetIsActive(): boolean;
        set(attribute: string, value: any, options?: ModelSetOptions): void;
        private validate(attribute, value);
    }
    function setState(model: Model, args: any[]): any;
}
interface JQuery {
    coveo(method: 'state'): Coveo.QueryStateModel;
    coveo(method: 'state', name: string): any;
    coveo(method: 'state', name: string, value: any, options?: Coveo.ModelSetOptions): any;
    coveo(method: 'state', values: {}, options?: Coveo.ModelSetOptions): any;
}
declare module Coveo {
    class ComponentStateModel extends Model {
        static ID: string;
        constructor(element: HTMLElement, window_?: any);
        registerComponent(componentId: string, component: Component): void;
    }
}
declare module Coveo {
    interface ComponentOptionsAttributes {
        resultLink: any;
    }
    class ComponentOptionsModel extends Model {
        static ID: string;
        static defaultAttributes: ComponentOptionsAttributes;
        static attributesEnum: {
            resultLink: string;
        };
        constructor(element: HTMLElement, attributes?: ComponentOptionsAttributes, window_?: any);
    }
}
declare module Coveo {
    class HistoryController extends Component {
        _window: Window;
        model: Model;
        queryController: QueryController;
        static ID: string;
        static attributesThatDoNotTriggerQuery: string[];
        private ignoreNextHashChange;
        private initialHashChange;
        private willUpdateHash;
        private hashchange;
        constructor(element: HTMLElement, _window?: Window, model?: Model, queryController?: QueryController);
        private handleNuke();
        private handleHashChange();
        private updateHashFromModel();
        private updateModelFromHash();
        private getHashValue(value);
        setHashValues(values: {}): void;
        debugInfo(): {
            'state': {
                [key: string]: any;
            };
        };
    }
}
declare module Coveo {
    class LocalStorageUtils<T> {
        id: string;
        constructor(id: string);
        save(data: T): void;
        load(): T;
        remove(key?: string): void;
        private getLocalStorageKey();
    }
}
declare module Coveo {
    class LocalStorageHistoryController extends Component {
        _window: Window;
        model: Model;
        queryController: QueryController;
        static ID: string;
        storage: LocalStorageUtils<{
            [key: string]: any;
        }>;
        private omit;
        constructor(element: HTMLElement, _window?: Window, model?: Model, queryController?: QueryController);
        withoutThoseAttribute(attributes: string[]): void;
        private updateLocalStorageFromModel();
        private updateModelFromLocalStorage();
        setStorageValues(values: {
            [key: string]: any;
        }): void;
    }
}
declare module Coveo {
    interface QueryOptions {
        ignoreWarningSearchEvent?: boolean;
        searchAsYouType?: boolean;
        beforeExecuteQuery?: () => void;
        closeModalBox?: boolean;
        cancel?: boolean;
        origin?: Component;
        keepLastSearchUid?: boolean;
    }
    class QueryController extends Component {
        options: SearchInterfaceOptions;
        static ID: string;
        private currentPendingQuery;
        private lastQueryBuilder;
        private lastQueryHash;
        private lastQuery;
        private lastSearchUid;
        private lastQueryResults;
        private currentError;
        private firstQuery;
        private createdOneQueryBuilder;
        private showingExecutingQueryAnimation;
        private overrideEndpoint;
        private localStorage;
        constructor(element: HTMLElement, options: SearchInterfaceOptions);
        setEndpoint(endpoint: SearchEndpoint): void;
        getEndpoint(): SearchEndpointInterface;
        getLastQuery(): Query;
        getLastQueryHash(): string;
        private getLastSearchUid();
        private loadLastQueryHash();
        saveLastQuery(): void;
        executeQuery(options?: QueryOptions): JQueryDeferred<QueryResults>;
        deferExecuteQuery(options?: QueryOptions): void;
        ensureCreatedQueryBuilder(): void;
        fetchMore(count: number): JQueryDeferred<QueryResults>;
        isStandaloneSearchbox(): boolean;
        cancelQuery(): void;
        createQueryBuilder(options: QueryOptions): QueryBuilder;
        private continueLastQueryBuilder(queryBuilder, count);
        private getPipelineInUrl();
        private cancelAnyCurrentPendingQuery();
        private showExecutingQueryAnimation();
        private hideExecutingQueryAnimation();
        private keepLastSearchUid(query, queryResults);
        private queryHash(query, queryResults?);
        private getCallOptions();
        private newQueryEvent(args);
        private buildingQueryEvent(args);
        private doneBuildingQueryEvent(args);
        private duringQueryEvent(args);
        private querySuccessEvent(args);
        private fetchMoreSuccessEvent(args);
        private deferredQuerySuccessEvent(args);
        private queryError(args);
        private preprocessResultsEvent(args);
        private noResultEvent(args);
        debugInfo(): any;
        private buildQueryDurationSection(queryResults);
    }
}
interface JQuery {
    coveo(method: 'executeQuery'): any;
}
declare module Coveo {
    interface NewQueryEventArgs {
        deferred: JQueryDeferred<any>;
        searchAsYouType: boolean;
        cancel: boolean;
        origin?: Component;
    }
    interface BuildingQueryEventArgs {
        queryBuilder: QueryBuilder;
        searchAsYouType: boolean;
        cancel: boolean;
    }
    interface DoneBuildingQueryEventArgs {
        queryBuilder: QueryBuilder;
        searchAsYouType: boolean;
        cancel: boolean;
    }
    interface DuringQueryEventArgs {
        queryBuilder: QueryBuilder;
        query: Query;
        deferred: JQueryDeferred<any>;
        searchAsYouType: boolean;
    }
    interface QuerySuccessEventArgs {
        query: Query;
        results: QueryResults;
        queryBuilder: QueryBuilder;
        searchAsYouType: boolean;
    }
    interface FetchMoreSuccessEventArgs {
        query: Query;
        results: QueryResults;
        queryBuilder: QueryBuilder;
        searchAsYouType: boolean;
    }
    interface QueryErrorEventArgs {
        queryBuilder: QueryBuilder;
        endpoint: SearchEndpointInterface;
        query: Query;
        error: EndpointError;
        searchAsYouType: boolean;
    }
    interface PreprocessResultsEventArgs {
        queryBuilder: QueryBuilder;
        query: Query;
        results: QueryResults;
        searchAsYouType: boolean;
    }
    interface PreprocessMoreResultsEventArgs {
        results: QueryResults;
    }
    interface NoResultsEventArgs {
        queryBuilder: QueryBuilder;
        query: Query;
        results: QueryResults;
        searchAsYouType: boolean;
        retryTheQuery: boolean;
    }
    interface BuildingCallOptionsEventArgs {
        options: EndpointCallOptions;
    }
    class QueryEvents {
        static newQuery: string;
        static buildingQuery: string;
        static doneBuildingQuery: string;
        static duringQuery: string;
        static duringFetchMoreQuery: string;
        static querySuccess: string;
        static fetchMoreSuccess: string;
        static deferredQuerySuccess: string;
        static queryError: string;
        static preprocessResults: string;
        static preprocessMoreResults: string;
        static noResults: string;
        static buildingCallOptions: string;
    }
}
interface JQuery {
    on(events: string, handler: (e: JQueryEventObject, args: {}) => any): any;
    on(events: 'newQuery', handler: (e: JQueryEventObject, args: Coveo.NewQueryEventArgs) => any): any;
    on(events: 'buildingQuery', handler: (e: JQueryEventObject, args: Coveo.BuildingQueryEventArgs) => any): any;
    on(events: 'doneBuildingQuery', handler: (e: JQueryEventObject, args: Coveo.DoneBuildingQueryEventArgs) => any): any;
    on(events: 'duringQuery', handler: (e: JQueryEventObject, args: Coveo.DuringQueryEventArgs) => any): any;
    on(events: 'duringFetchMoreQuery', handler: (e: JQueryEventObject, args: Coveo.DuringQueryEventArgs) => any): any;
    on(events: 'querySuccess', handler: (e: JQueryEventObject, args: Coveo.QuerySuccessEventArgs) => any): any;
    on(events: 'fetchMoreSuccess', handler: (e: JQueryEventObject, args: Coveo.FetchMoreSuccessEventArgs) => any): any;
    on(events: 'queryError', handler: (e: JQueryEventObject, args: Coveo.QueryErrorEventArgs) => any): any;
    on(events: 'preprocessResults', handler: (e: JQueryEventObject, args: Coveo.PreprocessResultsEventArgs) => any): any;
    on(events: 'preprocessMoreResults', handler: (e: JQueryEventObject, args: Coveo.PreprocessMoreResultsEventArgs) => any): any;
    on(events: 'noResults', handler: (e: JQueryEventObject, args: Coveo.NoResultsEventArgs) => any): any;
    on(events: 'buildingCallOptions', handler: (e: JQueryEventObject, args: Coveo.BuildingCallOptionsEventArgs) => any): any;
}
declare module Coveo {
    interface BeforeInitializationEventArgs {
    }
    interface AfterInitializationEventArgs {
    }
    class InitializationEvents {
        static beforeInitialization: string;
        static afterComponentsInitialization: string;
        static restoreHistoryState: string;
        static afterInitialization: string;
        static nuke: string;
    }
}
declare module Coveo {
    interface DisplayedNewResultEventArgs {
        result: QueryResult;
        item: HTMLElement;
    }
    interface DisplayedNewResultsEventArgs {
    }
    interface OpenQuickviewEventArgs {
    }
    class ResultListEvents {
        static newResultsDisplayed: string;
        static newResultDisplayed: string;
        static openQuickview: string;
    }
}
declare module Coveo {
    interface CompletedImageResultsLayoutEventArgs {
    }
    class ImageResultListEvents {
        static imageResultsLayoutComplete: string;
    }
}
declare module Coveo {
    interface EnterOnSearchboxEventArgs {
        expression: string;
    }
    interface QuickviewLoadedEventArgs {
        duration: number;
    }
    interface OpenQuickviewEventArgs {
        termsToHighlight: Array<string>;
    }
    interface AttachToCaseEventArgs {
        result: Coveo.QueryResult;
        dataToAttach: any;
    }
    interface DetachFromCaseEventArgs {
        result: Coveo.QueryResult;
    }
    class UserActionEvents {
        static enterOnSearchbox: string;
        static quickviewLoaded: string;
        static openQuickview: string;
        static attachToCase: string;
        static detachFromCase: string;
        static attachToCaseStateChanged: string;
    }
}
declare module Coveo {
    interface SavePreferencesEventArgs {
    }
    class PreferencesPanelEvents {
        static savePreferences: string;
        static exitPreferencesWithoutSave: string;
    }
}
declare module Coveo {
    interface SearchInterfaceOptions {
        searchPageUri?: string;
        enableHistory?: boolean;
        useLocalStorageForHistory?: boolean;
        resultsPerPage?: number;
        excerptLength?: number;
        expression?: string;
        filterField?: string;
        hideUntilFirstQuery?: boolean;
        firstLoadingAnimation?: HTMLElement;
        autoTriggerQuery?: boolean;
        initOptions?: any;
        endpoint?: SearchEndpoint;
        timezone?: string;
        enableDebugInfo?: boolean;
        originalOptionsObject?: any;
        enableCollaborativeRating?: boolean;
        enableDuplicateFiltering?: boolean;
        pipeline?: string;
        maximumAge?: number;
    }
    class SearchInterface extends Component {
        element: HTMLElement;
        options: SearchInterfaceOptions;
        analyticsOptions: any;
        static ID: string;
        static options: SearchInterfaceOptions;
        private attachedComponents;
        private isNewDesignAttribute;
        constructor(element: HTMLElement, options?: SearchInterfaceOptions, analyticsOptions?: any, _window?: Window);
        protected initializeAnalytics(): AnalyticsClient;
        private setupDebugInfo();
        private showAndHideFirstQueryAnimation();
        protected displayFirstQueryWaitAnimation(): void;
        protected hideFirstQueryWaitAnimation(): void;
        private handlePreprocessQueryStateModel(args);
        private getTabGroupId(tabGroupId);
        private getTabId(tabGroupId, tabId);
        private getSort(tabId, sortId);
        private getQuickview(quickviewId);
        private handleQuickviewChanged(e, args);
        private handleBuildingQuery(e, data);
        attachComponent(type: string, component: Component): void;
        detachComponent(type: string, component: Component): void;
        components<T>(type: string): T[];
        isNewDesign(): boolean;
    }
}
declare module Coveo {
    interface StandaloneSearchInterfaceOptions extends SearchInterfaceOptions {
        redirectIfEmpty?: boolean;
    }
    class StandaloneSearchInterface extends SearchInterface {
        element: HTMLElement;
        options: StandaloneSearchInterfaceOptions;
        analyticsOptions: any;
        static ID: string;
        static options: StandaloneSearchInterfaceOptions;
        constructor(element: HTMLElement, options?: StandaloneSearchInterfaceOptions, analyticsOptions?: any, _window?: Window);
        handleRedirect(e: JQueryEventObject, data: NewQueryEventArgs): void;
        redirectToSearchPage(searchPage: string): void;
        private searchboxIsEmpty();
    }
}
declare module Coveo {
    interface BeforeRedirectEventArgs {
        searchPageUri: string;
        cancel: boolean;
    }
    class StandaloneSearchInterfaceEvents {
        static beforeRedirect: string;
    }
}
declare module Coveo {
    interface DebugOptions {
        enableDebug?: boolean;
    }
    class Debug extends Component {
        element: HTMLElement;
        options: DebugOptions;
        static ID: string;
        static options: DebugOptions;
        static customOrder: string[];
        static durationKeys: string[];
        static maxDepth: number;
        localStorageDebug: LocalStorageUtils<string[]>;
        collapsedSections: string[];
        private debug;
        private stackDebug;
        constructor(element: HTMLElement, options?: DebugOptions, bindings?: ComponentBindings);
        showDebugPanel(builder: (results?: QueryResults) => {
            body: JQuery;
            json: any;
        }): void;
        private handleShowDebugPanel(info);
        private handleNewResultDisplayed(e, args);
        private handleResultDoubleClick(e, args);
        private dowloadHref(info);
        buildStackPanel(stackDebug: any, results?: QueryResults): {
            body: JQuery;
            json: any;
        };
        buildStackPanelSection(value: any, results: QueryResults): {
            section: HTMLElement;
            json?: any;
        };
        private buildSearchbox(body);
        private search(value, body);
        private findInProperty(element, value);
        private buildEnableCheckbox(body, search, bodyBuilder);
        private buildSection(id);
        private buildFieldsSection(result);
        private buildRankingInfoSection(result);
        parseRankingInfo(value: string): {};
        private parseWeights(value);
        private buildProperty(value, label?);
        private buildObjectProperty(object, label?);
        private buildBasicProperty(value, label?);
        private toJson(value, depth?, done?);
        private toJsonRef(value, stringValue?);
        private componentToJson(value, depth?);
        private htmlToJson(value);
        private templateToJson(template);
        private selectElementText(el);
        private highlightSearch(element, search);
        private removeHighlightSearch(element);
        debugInfo(): any;
    }
}
declare module Coveo {
    class DebugEvents {
        static showDebugPanel: string;
    }
}
declare module Coveo {
    interface AggregateOptions {
        field?: string;
        operation?: string;
        format?: string;
    }
    class Aggregate extends Component {
        element: HTMLElement;
        options: AggregateOptions;
        static ID: string;
        static options: AggregateOptions;
        private index;
        constructor(element: HTMLElement, options?: AggregateOptions, bindings?: ComponentBindings);
        private handleBuildingQuery(e, args);
        private handleQuerySuccess(e, args);
    }
}
declare module Coveo {
    interface AnalyticsEndpointOptions {
        token: string;
        serviceUrl: string;
    }
    class AnalyticsEndpoint {
        options: AnalyticsEndpointOptions;
        logger: Logger;
        static DEFAULT_ANALYTICS_URI: string;
        static DEFAULT_ANALYTICS_VERSION: string;
        static CUSTOM_ANALYTICS_VERSION: any;
        static pendingRequest: JQueryPromise<any>;
        private visitId;
        private endpointCaller;
        constructor(options: AnalyticsEndpointOptions);
        getCurrentVisitId(): string;
        getCurrentVisitIdDeferred(): JQueryPromise<string>;
        sendSearchEvents(searchEvents: SearchEvent[]): void;
        sendDocumentViewEvent(documentViewEvent: ClickEvent): void;
        sendCustomEvent(customEvent: CustomEvent): void;
        getTopQueries(params: TopQueries): JQueryPromise<string[]>;
        protected sendEventToApi<D, R>(data: D, path: string, paramName: string): JQueryPromise<R>;
        protected appendUrlParamSign(url: string): string;
        private getFromService<T>(url, params);
        private buildQueryStringFromParam(params);
    }
}
declare module Coveo {
    class PendingSearchEvent {
        _root: HTMLElement;
        _endpoint: AnalyticsEndpoint;
        _templateSearchEvent: SearchEvent;
        _sendToCloud: boolean;
        private handler;
        private searchDeferred;
        private searchEvents;
        private results;
        _cancelled: boolean;
        _finished: boolean;
        constructor(_root: HTMLElement, _endpoint: AnalyticsEndpoint, _templateSearchEvent: SearchEvent, _sendToCloud: boolean);
        getEventCause(): string;
        getEventMeta(): {
            [key: string]: string;
        };
        cancel(): void;
        _handleDuringQuery(e: JQueryEventObject, args: DuringQueryEventArgs): void;
        _stopRecording(): void;
        private flush();
        private fillSearchEvent(searchEvent, searchInterface, query, queryResults);
    }
}
declare module Coveo {
    class PendingSearchAsYouTypeSearchEvent extends PendingSearchEvent {
        _root: HTMLElement;
        _endpoint: AnalyticsEndpoint;
        _templateSearchEvent: SearchEvent;
        _sendToCloud: any;
        delayBeforeSending: number;
        private beforeUnloadHandler;
        private armBatchDelay;
        private toSendRightNow;
        constructor(_root: HTMLElement, _endpoint: AnalyticsEndpoint, _templateSearchEvent: SearchEvent, _sendToCloud: any);
        _handleDuringQuery(e: JQueryEventObject, args: DuringQueryEventArgs): void;
        sendRightNow(): void;
        _stopRecording(): void;
        private handleNuke();
        private onWindowUnload();
        private isCancelledOrFinished();
    }
}
declare module Coveo {
    interface AnalyticsSearchEventsArgs {
        searchEvents: APISearchEvent[];
    }
    interface AnalyticsDocumentViewEventArgs {
        documentViewEvent: APIDocumentViewEvent;
    }
    interface AnalyticsCustomEventArgs {
        customEvent: APICustomEvent;
    }
    interface ChangeAnalyticsCustomDataEventArgs extends ChangeableAnalyticsDataObject {
        type: string;
        metaObject: ChangeableAnalyticsMetaObject;
    }
    interface ChangeableAnalyticsMetaObject {
        [name: string]: string;
    }
    interface ChangeableAnalyticsDataObject {
        originLevel1: string;
        originLevel2: string;
        originLevel3: string;
        language: string;
    }
    class AnalyticsEvents {
        static searchEvent: string;
        static documentViewEvent: string;
        static customEvent: string;
        static changeAnalyticsCustomData: string;
    }
}
declare module Coveo {
    class APIAnalyticsBuilder {
        static convertSearchEventToAPI(searchEvent: SearchEvent): APISearchEvent;
        static convertDocumentViewToAPI(documentView: ClickEvent): APIDocumentViewEvent;
        static convertCustomEventToAPI(customEvent: CustomEvent): APICustomEvent;
    }
}
declare module Coveo {
    class LiveAnalyticsClient implements AnalyticsClient {
        endpoint: AnalyticsEndpoint;
        rootElement: HTMLElement;
        userId: string;
        userDisplayName: string;
        anonymous: boolean;
        splitTestRunName: string;
        splitTestRunVersion: string;
        originLevel1: string;
        sendToCloud: boolean;
        isContextual: boolean;
        private language;
        private device;
        private mobile;
        private pendingSearchEvent;
        private pendingSearchAsYouTypeSearchEvent;
        private logger;
        constructor(endpoint: AnalyticsEndpoint, rootElement: HTMLElement, userId: string, userDisplayName: string, anonymous: boolean, splitTestRunName: string, splitTestRunVersion: string, originLevel1: string, sendToCloud: boolean);
        isActivated(): boolean;
        getCurrentVisitId(): string;
        getCurrentVisitIdDeferred(): JQueryPromise<string>;
        getCurrentEventCause(): string;
        getCurrentEventMeta(): {
            [key: string]: string;
        };
        logSearchEvent<TMeta>(actionCause: AnalyticsActionCause, meta: TMeta): void;
        logSearchAsYouType<TMeta>(actionCause: AnalyticsActionCause, meta?: TMeta): void;
        logClickEvent<TMeta>(actionCause: AnalyticsActionCause, meta: TMeta, result: QueryResult, element: HTMLElement): void;
        logCustomEvent<TMeta>(actionCause: AnalyticsActionCause, meta: TMeta, element: HTMLElement): void;
        getTopQueries(params: TopQueries): JQueryPromise<string[]>;
        sendAllPendingEvents(): void;
        warnAboutSearchEvent(): void;
        private pushCustomEvent(actionCause, metaObject, element?);
        private pushSearchEvent(actionCause, metaObject);
        private checkToSendAnyPendingSearchAsYouType(actionCause);
        private pushSearchAsYouTypeEvent(actionCause, metaObject);
        private pushClickEvent(actionCause, metaObject, result, element);
        private buildAnalyticsEvent(actionCause, metaObject);
        private buildSearchEvent(actionCause, metaObject);
        private buildClickEvent(actionCause, metaObject, result, element);
        private buildCustomEvent(actionCause, metaObject, element);
        private buildMetaObject<TMeta>(meta);
        private cancelAnyPendingSearchAsYouTypeEvent();
        private resolveActiveTabFromElement(element);
        private resolveQueryStateModel(rootElement);
        private eventIsNotRelatedToSearchbox(event);
        private triggerChangeAnalyticsCustomData(type, metaObject, event, data?);
        private merge<T>(first, second);
    }
}
declare module Coveo {
    class MultiAnalyticsClient implements AnalyticsClient {
        private analyticsClients;
        isContextual: boolean;
        constructor(analyticsClients?: AnalyticsClient[]);
        isActivated(): boolean;
        getCurrentEventCause(): string;
        getCurrentEventMeta(): {
            [key: string]: any;
        };
        logSearchEvent<TMeta>(actionCause: AnalyticsActionCause, meta: TMeta): void;
        logSearchAsYouType<TMeta>(actionCause: AnalyticsActionCause, meta: TMeta): void;
        logClickEvent(actionCause: AnalyticsActionCause, meta?: AnalyticsDocumentViewMeta, result?: QueryResult, element?: HTMLElement): void;
        logCustomEvent<TMeta>(actionCause: AnalyticsActionCause, meta?: TMeta, element?: HTMLElement): void;
        getTopQueries(params: TopQueries): JQueryPromise<string[]>;
        getCurrentVisitIdDeferred(): JQueryPromise<string>;
        getCurrentVisitId(): string;
        sendAllPendingEvents(): void;
        warnAboutSearchEvent(): void;
        private mergeTopQueries(values, pageSize);
    }
}
declare module Coveo {
}
declare module Coveo {
    interface AnalyticsOptions {
        user?: string;
        userDisplayName?: string;
        token?: string;
        endpoint?: string;
        anonymous?: boolean;
        searchHub?: string;
        splitTestRunName?: string;
        splitTestRunVersion?: string;
        sendToCloud?: boolean;
    }
    class Analytics extends Component {
        element: HTMLElement;
        options: AnalyticsOptions;
        static ID: string;
        static options: AnalyticsOptions;
        client: AnalyticsClient;
        constructor(element: HTMLElement, options?: AnalyticsOptions, bindings?: ComponentBindings);
        static create(element: HTMLElement, options: AnalyticsOptions): AnalyticsClient;
        private static getClient(element, options);
        protected initializeAnalyticsEndpoint(): AnalyticsEndpoint;
        private initializeAnalyticsClient();
        private handleBuildingQuery(e, data);
        private handleQueryError(e, data);
    }
}
declare module Coveo {
    interface MenuItem {
        text: string;
        className: string;
        tooltip?: string;
        index?: number;
        onOpen: () => void;
        onClose?: () => void;
    }
}
declare module Coveo {
    interface AuthenticationProviderOptions {
        name?: string;
        caption?: string;
        useIFrame?: boolean;
        showIFrame?: boolean;
    }
    class AuthenticationProvider extends Component {
        element: HTMLElement;
        options: AuthenticationProviderOptions;
        static ID: string;
        static options: AuthenticationProviderOptions;
        private handlers;
        constructor(element: HTMLElement, options?: AuthenticationProviderOptions, bindings?: ComponentBindings);
        private handleBuildingCallOptions(e, args);
        private handleQueryError(e, args);
        private authenticateWithProvider();
        private redirectToAuthenticationProvider();
        private useIFrameToAuthenticate();
        private createHandler(modalbox, iframe);
        private handleNuke();
        private createPopupForWaitMessage(iframe);
        private createPopupForVisibleIFrame(iframe);
        private getAuthenticationProviderUriForRedirect();
        private getAuthenticationProviderUriForIFrame();
    }
}
declare module Coveo {
    interface BreadcrumbItem {
        element: HTMLElement;
    }
    interface BreadcrumbOptions {
    }
}
declare module Coveo {
    interface PopulateBreadcrumbEventArgs {
        breadcrumbs: BreadcrumbItem[];
    }
    interface ClearBreadcrumbEventArgs {
    }
    class BreadcrumbEvents {
        static populateBreadcrumb: string;
        static clearBreadcrumb: string;
        static redrawBreadcrumb: string;
    }
}
declare module Coveo {
    class Breadcrumb extends Component {
        element: HTMLElement;
        options: BreadcrumbOptions;
        static ID: string;
        static options: BreadcrumbOptions;
        private lastBreadcrumbs;
        constructor(element: HTMLElement, options?: BreadcrumbOptions, bindings?: ComponentBindings);
        private drawBreadcrumb(breadcrumbs);
        private redrawBreadcrumb();
        private handleDeferredQuerySuccess();
        private handleAfterInitialization();
        private getBreadcrumbs();
        private clearBreadcrumbs();
    }
}
declare module Coveo {
    class SortCriteria {
        sort: string;
        direction: string;
        private static validSorts;
        private static sortsNeedingDirection;
        private static validDirections;
        constructor(sort: string, direction?: string);
        putInQueryBuilder(queryBuilder: QueryBuilder): void;
        getValueFromResult(result: QueryResult): any;
        toString(): string;
        equals(criteria: SortCriteria): boolean;
        static parse(criteria: string): SortCriteria;
        private static sortIsField(criteria);
        private static sortNeedsDirection(sort);
    }
}
declare module Coveo {
    interface TabOptions {
        expression?: string;
        constant?: boolean;
        id?: string;
        icon?: string;
        caption?: string;
        sort?: string;
        endpoint?: SearchEndpoint;
        enableDuplicateFiltering?: boolean;
        pipeline?: string;
        maximumAge?: number;
    }
    class Tab extends Component {
        element: HTMLElement;
        options: TabOptions;
        static ID: string;
        static options: TabOptions;
        iconTemplate: (...data: any[]) => string;
        tabTemplate: (...data: any[]) => string;
        private isFirstQuery;
        constructor(element: HTMLElement, options?: TabOptions, bindings?: ComponentBindings);
        select(): void;
        private handleClick(e);
        private render();
        protected handleBuildingQuery(e: JQueryEventObject, data: BuildingQueryEventArgs): void;
        private handleQueryStateChanged(e, data);
        protected isSelected(): boolean;
        private showAndHideAppropriateElements();
        isElementIncludedInTab(element: HTMLElement): boolean;
        private splitListOfTabs(value);
        private toggleAllComponentsUnder(element, enable);
        enable(): void;
        disable(): void;
    }
}
declare module Coveo {
    interface CurrentTabOptions {
        tabSectionToOpen: string;
    }
    class CurrentTab extends Component {
        element: HTMLElement;
        options: CurrentTabOptions;
        static ID: string;
        static options: CurrentTabOptions;
        constructor(element: HTMLElement, options?: CurrentTabOptions, bindings?: ComponentBindings);
        private handleTabChange();
    }
}
declare module Coveo {
    interface DidYouMeanOptions {
        enableAutoCorrection?: boolean;
    }
    class DidYouMean extends Component {
        element: HTMLElement;
        options: DidYouMeanOptions;
        bindings: ComponentBindings;
        static ID: string;
        static options: DidYouMeanOptions;
        private hideNext;
        constructor(element: HTMLElement, options?: DidYouMeanOptions, bindings?: ComponentBindings);
        private handleNewQuery();
        private handlePrepareQueryBuilder(e, data);
        private handleNoResults(e, data);
        private handleProcessNewQueryResults(e, data);
        private buildCorrectedSentence(correction);
        private doQueryWithCorrectedTerm(correctedTerm);
    }
}
declare module Coveo {
    interface StatusBarPhonegapPlugin {
        overlaysWebView(toggle: boolean): void;
        styleDefault(): void;
        styleLightContent(): void;
        styleBlackTranslucent(): void;
        styleBlackOpaque(): void;
        backgroundColorByName(name: string): void;
        backgroundColorByHexString(hexColor: string): void;
        hide(): void;
        show(): void;
    }
    interface EmailComposerPhonegapPlugin_0_8_1 {
        open: (opener: EmailComposerPhonegapPlugin_0_8_1_opener_object) => void;
    }
    interface EmailComposerPhonegapPlugin_0_8_1_opener_object {
        to?: string[];
        cc?: string[];
        bcc?: string[];
        attachments?: string[];
        subject?: string;
        body?: string;
        isHtml?: boolean;
    }
    interface NetworkNetworkInformationPhonegapPluginState_0_2_7 {
        UNKNOWN: number;
        ETHERNET: number;
        WIFI: number;
        CELL_2G: number;
        CELL_3G: number;
        CELL_4G: number;
        CELL: number;
        NONE: number;
    }
    interface NetworkInformationPhonegapPlugin_0_2_7 {
        type: any;
    }
    interface PhonegapIonicKeyboard_1_0_3 {
        hideKeyboardAccessoryBar(boolean: any): void;
        close(): void;
        show(): void;
        disableScroll(boolean: any): void;
    }
}
interface Window {
    Connection: Coveo.NetworkNetworkInformationPhonegapPluginState_0_2_7;
    plugins: any;
    plugin: {
        email?: Coveo.EmailComposerPhonegapPlugin_0_8_1;
    };
    cordova: {
        plugins: {
            Keyboard?: Coveo.PhonegapIonicKeyboard_1_0_3;
        };
    };
}
declare module Coveo {
    interface ErrorReportOptions {
        enablePopup: boolean;
        showDetailedError: boolean;
    }
    class ErrorReport extends Component {
        element: HTMLElement;
        options: ErrorReportOptions;
        static ID: string;
        static options: ErrorReportOptions;
        private message;
        private closePopup;
        constructor(element: HTMLElement, options?: ErrorReportOptions, bindings?: ComponentBindings);
        private setErrorTitle();
        private buildPrevious();
        private buildClear();
        private buildRetry();
        private handleNewQuery();
        private handleQueryError(e, data);
        private buildErrorInfo(data);
    }
}
declare module Coveo {
    class Excerpt extends Component {
        element: HTMLElement;
        options: any;
        bindings: ComponentBindings;
        result: QueryResult;
        static ID: string;
        constructor(element: HTMLElement, options?: any, bindings?: ComponentBindings, result?: QueryResult);
    }
}
declare module Coveo {
    class FacetValue {
        value: string;
        lookupValue: string;
        occurrences: number;
        computedField: number;
        delta: number;
        score: number;
        selected: boolean;
        excluded: boolean;
        waitingForDelta: boolean;
        reset(): void;
        updateCountsFromNewValue(newValue: FacetValue): void;
        cloneWithZeroOccurrences(): FacetValue;
        cloneWithDelta(count: number, delta: number): FacetValue;
        getFormattedCount(): string;
        getFormattedComputedField(format: string): any;
        static create(value: any): FacetValue;
        static createFromValue(value: string): FacetValue;
        static createFromGroupByValue(groupByValue: GroupByValue): FacetValue;
        static createFromFieldValue(fieldValue: IndexFieldValue): FacetValue;
    }
    class FacetValues {
        private values;
        constructor(groupByResult?: GroupByResult);
        add(facetValue: FacetValue): void;
        remove(value: string): void;
        size(): number;
        isEmpty(): boolean;
        at(index: number): FacetValue;
        get(value: string): FacetValue;
        contains(value: string): boolean;
        getAll(): FacetValue[];
        getSelected(): FacetValue[];
        getExcluded(): FacetValue[];
        hasSelectedOrExcludedValues(): boolean;
        reset(): void;
        importActiveValuesFromOtherList(other: FacetValues): void;
        updateCountsFromNewValues(newValues: FacetValues): void;
        updateDeltaWithFilteredFacetValues(filtered: FacetValues): void;
        mergeWithUnfilteredFacetValues(unfiltered: FacetValues): void;
        sortValuesDependingOnStatus(excludeLastIndex?: number): void;
    }
}
declare module Coveo.FileTypes {
    interface FileTypeInfo {
        icon: string;
        caption: string;
    }
    function get(result: QueryResult): FileTypeInfo;
    function getObjectType(objecttype: string): FileTypeInfo;
    function getFileType(filetype: string): FileTypeInfo;
    function getFileTypeCaptions(): {};
}
declare module Coveo.FacetUtils {
    function getRegexToUseForFacetSearch(value: string, ignoreAccent: boolean): RegExp;
    function getValuesToUseForSearchInFacet(original: string, facet: Facet): string[];
    function buildFacetSearchPattern(values: string[]): string;
    function needAnotherFacetSearch(currentSearchLength: number, newSearchLength: number, oldSearchLength: number, desiredSearchLength: number): boolean;
    function addNoStateCssClassToFacetValues(facet: Facet, container: JQuery): void;
    function tryToGetTranslatedCaption(field: string, value: string): string;
    function clipCaptionsToAvoidOverflowingTheirContainer(facet: Facet, forceClip?: boolean): void;
}
declare module Coveo {
    class FacetQueryController {
        facet: Facet;
        private expressionToUseForFacetSearch;
        private constantExpressionToUseForFacetSearch;
        lastGroupByRequestIndex: number;
        lastGroupByRequest: GroupByRequest;
        lastGroupByResult: GroupByResult;
        constructor(facet: Facet);
        prepareForNewQuery(): void;
        computeOurFilterExpression(): string;
        putGroupByIntoQueryBuilder(queryBuilder: QueryBuilder): void;
        search(params: FacetSearchParameters, oldLength?: number): JQueryDeferred<IndexFieldValue[]>;
        searchWithLookupField(params: FacetSearchParameters): JQueryDeferred<QueryResults>;
        fetchMore(): JQueryDeferred<QueryResults>;
        searchInFacetToUpdateDelta(facetValues: FacetValue[]): JQueryDeferred<QueryResults>;
        private createSearchDeferer(query);
        private buildSearchQueryForFacetWithLookupField(valuesToSearch);
        protected buildListFieldValuesRequest(params: FacetSearchParameters): ListFieldValuesRequest;
        private buildGroupByQuery(allowedValues?);
        protected createGroupByAllowedValues(): string[];
        private getAllowedValuesFromSelected();
        private createGroupByQueryOverride(queryBuilder);
        protected createBasicGroupByRequest(allowedValues?: string[], addComputedField?: boolean): GroupByRequest;
        private checkForFacetSearchValuesToRemove(fieldValues, valueToCheckAgainst);
    }
}
declare module Coveo {
    enum KEYBOARD {
        BACKSPACE = 8,
        TAB = 9,
        ENTER = 13,
        SHIFT = 16,
        CTRL = 17,
        ALT = 18,
        ESCAPE = 27,
        SPACEBAR = 32,
        PAGE_UP = 33,
        PAGE_DOWN = 34,
        HOME = 36,
        LEFT_ARROW = 37,
        UP_ARROW = 38,
        RIGHT_ARROW = 39,
        DOWN_ARROW = 40,
        INSERT = 45,
        DELETE = 46,
    }
    class KeyboardUtils {
        static keysEqual(key: any, code: any): boolean;
        static isAllowedKeyForOmnibox(e: KeyboardEvent): boolean;
        static isAllowedKeyForSearchAsYouType(e: KeyboardEvent): boolean;
        static isDeleteOrBackspace(e: KeyboardEvent): boolean;
        static isArrowKeyPushed(keycode: number): boolean;
        static isNumberKeyPushed(keycode: number): boolean;
        static isLetterKeyPushed(keycode: number): boolean;
    }
}
declare module Coveo {
    class FacetSearchParameters {
        facet: Facet;
        searchEvenIfEmpty: boolean;
        nbResults: number;
        ignoreAccents: boolean;
        valueToSearch: string;
        alwaysInclude: string[];
        alwaysExclude: string[];
        sortCriteria: string;
        queryOverride: string;
        constantQueryOverride: string;
        fetchMore: boolean;
        constructor(facet: Facet);
        setValueToSearch(value: string): FacetSearchParameters;
        getPattern(buildForHierarchical?: boolean): string;
    }
    class FacetSearch {
        facet: Facet;
        facetSearchValuesListKlass: FacetSearchValuesListKlass;
        currentlyDisplayedResults: string[];
        private search;
        private magnifier;
        private wait;
        private clearIcon;
        private clear;
        private middle;
        private input;
        private searchResults;
        private facetSearchTimeout;
        private showingFacetSearchWaitAnimation;
        private facetSearchDeferred;
        private searchTemplate;
        private magnifierTemplate;
        private waitTemplate;
        private clearIconTemplate;
        private clearTemplate;
        private middleTemplate;
        private inputTemplate;
        private searchResultsTemplate;
        private moreValuesToFetch;
        private resize;
        constructor(facet: Facet, facetSearchValuesListKlass: FacetSearchValuesListKlass);
        isMobileDevice(): boolean;
        build(): JQuery;
        positionSearchResults(): void;
        completelyDismissSearch(): void;
        focus(): void;
        private buildBaseSearch();
        private buildSearchMobile();
        private handleFacetSearchKeyUp(event);
        private handleNuke();
        private handleFacetSearchFocus(e);
        private handleClickElsewhere(event);
        private handleFacetSearchClear();
        private showOrHideClearElement(isEmpty);
        private handleKeyboardNavigation(event, isEmpty);
        private keyboardNavigationEnterPressed(event, isEmpty);
        private keyboardNavigationDeletePressed(event);
        private triggerNewFacetSearch(params);
        private startNewSearchTimeout(params);
        private cancelAnyPendingSearchOperation();
        private processNewFacetSearchResults(fieldValues, facetSearchParameters);
        private rebuildSearchResults(fieldValues, facetSearchParameters);
        private setupFacetSearchResultsEvents(elem);
        private handleFacetSearchResultsScroll();
        private buildParamsForNormalSearch();
        private buildParamsForFetchingMore();
        protected buildParamsForExcludingCurrentlyDisplayedValues(): FacetSearchParameters;
        private getCurrentlyShowedValues();
        private showSearchResultsElement();
        private hideSearchResultsElement();
        private highlightCurrentQueryWithinSearchResults();
        private makeFirstSearchResultTheCurrentOne();
        private makeCurrentResult(result);
        private moveCurrentResultDown();
        private moveCurrentResultUp();
        private getSelectables(target?);
        private performSelectActionOnCurrentSearchResult();
        private performExcludeActionOnCurrentSearchResult();
        private getValueInInputForFacetSearch();
        private selectAllValuesMatchingSearch();
        private showFacetSearchWaitingAnimation();
        private hideFacetSearchWaitingAnimation();
    }
}
declare module Coveo {
    interface FacetHeaderOptions {
        facetElement: JQuery;
        title: string;
        field: string;
        enableClearElement: boolean;
        enableCollapseElement: boolean;
        onEraserClick: () => void;
        icon?: string;
        facet?: Facet;
        settingsKlass?: FacetSettingsKlass;
        sortKlass?: FacetSortKlass;
        availableSorts?: string[];
        isLightningDesign: boolean;
    }
    class FacetHeader {
        options: FacetHeaderOptions;
        element: JQuery;
        icon: JQuery;
        waitElement: JQuery;
        collapseElement: JQuery;
        expandElement: JQuery;
        operatorElement: JQuery;
        eraserElement: JQuery;
        settings: FacetSettings;
        sort: FacetSort;
        constructor(options: FacetHeaderOptions);
        build(): JQuery;
        switchToAnd(): void;
        switchToOr(): void;
        collapseFacet(): void;
        expandFacet(): void;
        rebuildOperatorToggle(): void;
        updateOperatorQueryStateModel(): void;
        private buildIcon();
        private buildWaitAnimation();
        private buildCollapse();
        private buildExpand();
        private buildOperatorToggle();
        private handleOperatorClick();
        private buildTitle();
        buildEraser(): JQuery;
    }
}
declare module Coveo {
    interface FacetSortKlass {
        new (sorts: string[], facet: Facet): FacetSort;
    }
    interface FacetSortDescription {
        label: string;
        directionToggle: boolean;
        description: string;
        name: string;
        relatedSort?: string;
    }
    class FacetSort {
        facet: Facet;
        static availableSorts: {
            [name: string]: FacetSortDescription;
        };
        enabledSorts: FacetSortDescription[];
        activeSort: FacetSortDescription;
        customSortDirection: string;
        constructor(sorts: string[], facet: Facet);
        private removeEnabledSortsBasedOnFacetType();
        reorderValues(facetValues: FacetValue[]): FacetValue[];
        private reorderValuesWithCustomOrder(facetValues);
    }
}
declare module Coveo {
    interface FacetSettingsKlass {
        new (sorts: string[], facet: Facet): FacetSettings;
    }
    interface FacetState {
        included: string[];
        excluded: string[];
        operator: string;
    }
    class FacetSettings extends FacetSort {
        facet: Facet;
        loadedFromSettings: {
            [attribute: string]: any;
        };
        private facetSettingsIconTemplate;
        private facetSettingsButtonTemplate;
        private facetSettingsPopupTemplate;
        private facetSettingsSectionTemplate;
        private facetSettingsSectionIconTemplate;
        private facetSettingsSectionIconTemplateOldDesign;
        private facetSettingsItemsTemplate;
        private facetSettingsItemTemplate;
        private facetStateLocalStorage;
        private includedStateAttribute;
        private excludedStateAttribute;
        private operatorStateAttribute;
        private settingsPopup;
        private settingsIcon;
        private settingsButton;
        private directionSection;
        private saveStateSection;
        private clearStateSection;
        private hideSection;
        private showSection;
        private customSortDirectionChange;
        private enabledSortsIgnoreRenderBecauseOfPairs;
        constructor(sorts: string[], facet: Facet);
        build(): JQuery;
        loadSavedState(): void;
        private buildSortSection();
        private buildSortSectionItems();
        private closePopupAndUpdateSort();
        private closePopup();
        private buildDirectionSection();
        private buildSaveStateSection();
        private buildClearStateSection();
        private buildHideSection();
        private buildShowSection();
        private handleClickSettingsButtons(event, sortSection?);
        private handleClickSortButton(e, enabledSort);
        private handleDirectionClick(e, direction);
        private handleSaveStateClick(e);
        private handleClearStateClick(e);
        private handleMouseEventOnButton(sortSection);
        getCurrentDirectionItem(directionSection?: JQuery): JQuery;
        private activateDirectionSection();
        private disableDirectionSection();
        private getItems(section);
        private unselectSection(section);
        private selectItem(item);
        private unselectItem(item);
        private getPopupAlignment();
        private filterDuplicateForRendering();
    }
}
declare module Coveo {
    class FacetValuesList {
        facet: Facet;
        facetValueElementKlass: FacetValueElementKlass;
        private valueList;
        valueContainer: JQuery;
        constructor(facet: Facet, facetValueElementKlass: FacetValueElementKlass);
        build(): JQuery;
        get(value: FacetValue): ValueElement;
        get(value: string): ValueElement;
        select(value: FacetValue): ValueElement;
        select(value: string): ValueElement;
        unselect(value: FacetValue): ValueElement;
        unselect(value: string): ValueElement;
        exclude(value: FacetValue): ValueElement;
        exclude(value: string): ValueElement;
        unExclude(value: FacetValue): ValueElement;
        unExclude(value: string): ValueElement;
        toggleSelect(value: FacetValue): ValueElement;
        toggleSelect(value: string): ValueElement;
        toggleExclude(value: FacetValue): ValueElement;
        toggleExclude(value: string): ValueElement;
        rebuild(numberOfValues: number): void;
        _getValuesToBuildWith(): FacetValue[];
        private facetValueShouldBeRemoved(facetValue);
        private ensureFacetValueIsInList(value);
        private addNoStateCssClassToFacetValues();
    }
}
declare module Coveo {
    class ValueElementRenderer {
        facet: Facet;
        facetValue: FacetValue;
        listElement: JQuery;
        label: JQuery;
        checkbox: JQuery;
        stylishCheckbox: JQuery;
        valueCaption: JQuery;
        valueCount: JQuery;
        icon: JQuery;
        excludeIcon: JQuery;
        computedField: JQuery;
        constructor(facet: Facet, facetValue: FacetValue);
        withNo(element: JQuery[]): ValueElementRenderer;
        withNo(element: JQuery): ValueElementRenderer;
        build(): ValueElementRenderer;
        setCssClassOnListValueElement(): void;
        protected buildExcludeIcon(): JQuery;
        protected buildValueComputedField(): JQuery;
        protected buildValueCheckbox(): JQuery;
        protected buildValueStylishCheckbox(): JQuery;
        protected buildValueIcon(): JQuery;
        protected getValueIcon(): string;
        protected buildValueIconFromSprite(): JQuery;
        protected buildValueCaption(): JQuery;
        protected buildValueCount(): JQuery;
    }
}
declare module Coveo {
    interface ValueElementKlass {
        new (facet: Facet, facetValue: FacetValue): ValueElement;
    }
    interface FacetValueElementKlass {
        new (facet: Facet, facetValue: FacetValue, displayNextTime?: boolean): FacetValueElement;
    }
    interface ValueElementEventsBinding {
        displayNextTime: boolean;
        pinFacet: boolean;
        omniboxObject?: PopulateOmniboxObject;
    }
    class ValueElement {
        facet: Facet;
        facetValue: FacetValue;
        renderer: ValueElementRenderer;
        private isOmnibox;
        constructor(facet: Facet, facetValue: FacetValue);
        build(): ValueElement;
        bindEvent(eventBindings: ValueElementEventsBinding): void;
        select(): void;
        unselect(): void;
        exclude(): void;
        unexclude(): void;
        protected handleSelectValue(eventBindings: ValueElementEventsBinding): void;
        protected handleExcludeClick(eventBindings: ValueElementEventsBinding): void;
        protected handleEventForExcludedValueElement(eventBindings: ValueElementEventsBinding): void;
        protected handleEventForValueElement(eventBindings: ValueElementEventsBinding): void;
        protected handleEventForCheckboxChange(eventBindings: ValueElementEventsBinding): void;
        protected omniboxCloseEvent(eventArg: PopulateOmniboxObject): void;
        private getAnalyticsFacetMeta();
    }
}
declare module Coveo {
    class FacetValueElement extends ValueElement {
        facet: Facet;
        facetValue: FacetValue;
        keepDisplayedValueNextTime: boolean;
        private firstQuery;
        constructor(facet: Facet, facetValue: FacetValue, keepDisplayedValueNextTime: boolean);
        bindEvent(): void;
    }
}
declare module Coveo {
    interface OmniboxValueElementKlass {
        new (facet: Facet, facetValue: FacetValue, eventArg: PopulateOmniboxObject): OmniboxValueElement;
    }
    class OmniboxValueElement extends ValueElement {
        facet: Facet;
        facetValue: FacetValue;
        eventArg: PopulateOmniboxObject;
        constructor(facet: Facet, facetValue: FacetValue, eventArg: PopulateOmniboxObject);
        bindEvent(): void;
    }
}
declare module Coveo {
    interface FacetSearchValuesListKlass {
        new (facet: Facet, facetValueElementKlass: FacetValueElementKlass): FacetSearchValuesList;
    }
    class FacetSearchValuesList {
        facet: Facet;
        facetValueElementKlass: FacetValueElementKlass;
        constructor(facet: Facet, facetValueElementKlass: FacetValueElementKlass);
        build(facetValues: FacetValue[]): JQuery;
    }
}
declare module Coveo {
    interface BreadcrumbValueElementKlass {
        new (facet: Facet, facetValue: FacetValue): BreadcrumbValueElement;
    }
    class BreadcrumbValueElement {
        facet: Facet;
        facetValue: FacetValue;
        constructor(facet: Facet, facetValue: FacetValue);
        build(tooltip?: boolean): JQuery;
        getBreadcrumbTooltip(): string;
    }
}
declare module Coveo {
    class BreadcrumbValueList {
        facet: Facet;
        facetValues: FacetValue[];
        breadcrumbValueElementKlass: BreadcrumbValueElementKlass;
        private expanded;
        private collapsed;
        private elem;
        private valueContainer;
        constructor(facet: Facet, facetValues: FacetValue[], breadcrumbValueElementKlass: BreadcrumbValueElementKlass);
        build(): JQuery;
        private buildExpanded();
        private buildCollapsed();
        private setExpandedAndCollapsed();
    }
}
declare module Coveo {
    class OmniboxValuesList {
        facet: Facet;
        facetValues: FacetValue[];
        omniboxObject: PopulateOmniboxObject;
        omniboxValueElementKlass: OmniboxValueElementKlass;
        constructor(facet: Facet, facetValues: FacetValue[], omniboxObject: PopulateOmniboxObject, omniboxValueElementKlass: OmniboxValueElementKlass);
        build(): JQuery;
        private buildOmniboxForOneRow(facetValue, omniboxObject);
        private buildFinalOmniboxElement(rows);
        private buildOmniboxHeader();
        private highlightOmniboxMatch(orignalStr, regex, valueToSearch);
        private omniboxCloseEvent(eventArg);
    }
}
declare module Coveo {
    interface PopulateOmniboxObject {
        completeQueryExpression: PopulateOmniboxQueryExpression;
        currentQueryExpression: PopulateOmniboxQueryExpression;
        allQueryExpressions: PopulateOmniboxQueryExpression[];
        cursorPosition: number;
        clear(): void;
        clearCurrentExpression(): void;
        replace(searchValue: string, newValue: string): void;
        replaceCurrentExpression(newValue: string): void;
        insertAt(at: number, toInsert: string): void;
        closeOmnibox(): void;
    }
    interface PopulateOmniboxQueryExpression {
        word: string;
        regex: RegExp;
    }
    interface OmniboxData extends PopulateOmniboxObject {
        rows: OmniboxDataRow[];
    }
    interface OmniboxDataRow {
        zIndex?: number;
        element?: HTMLElement;
        deferred?: JQueryDeferred<OmniboxDataRow>;
    }
}
declare module Coveo {
    interface PopulateOmniboxEventArgs extends OmniboxData {
    }
    interface PopulateOmniboxEventRow extends OmniboxDataRow {
    }
    interface PopulateOmniboxSuggestionsEventArgs {
        omnibox: Omnibox;
        suggestions: Array<MagicBox.Suggestion[] | JQueryPromise<MagicBox.Suggestion[]>>;
    }
    interface OmniboxPreprocessResultForQueryEventArgs {
        result: MagicBox.Result;
    }
    interface CloseOmniboxEventArgs {
    }
    class OmniboxEvents {
        static populateOmnibox: string;
        static openOmnibox: string;
        static closeOmnibox: string;
        static populateOmniboxSuggestions: string;
        static omniboxPreprocessResultForQuery: string;
    }
}
declare module Coveo {
    interface FacetOptions {
        title?: string;
        field?: string;
        isMultiValueField?: boolean;
        numberOfValues?: number;
        pageSize?: number;
        sortCriteria?: string;
        availableSorts?: string[];
        injectionDepth?: number;
        showIcon?: boolean;
        useAnd?: boolean;
        enableCollapse?: boolean;
        allowTogglingOperator?: boolean;
        enableMoreLess?: boolean;
        valueCaption?: any;
        lookupField?: string;
        enableFacetSearch?: boolean;
        facetSearchDelay?: number;
        facetSearchIgnoreAccents?: boolean;
        numberOfValuesInFacetSearch?: number;
        includeInBreadcrumb?: boolean;
        includeInOmnibox?: boolean;
        numberOfValuesInOmnibox?: number;
        numberOfValuesInBreadcrumb?: number;
        id?: string;
        computedField?: string;
        computedFieldOperation?: string;
        computedFieldFormat?: string;
        computedFieldCaption?: string;
        preservePosition?: boolean;
        scrollContainer?: HTMLElement;
        paddingContainer?: HTMLElement;
        customSort?: string[];
        enableSettings?: boolean;
        enableSettingsFacetState?: boolean;
        allowedValues?: string[];
        headerIcon?: string;
        valueIcon?: (facetValue: FacetValue) => string;
        additionalFilter?: string;
        dependsOn?: string;
    }
    class Facet extends Coveo.Component {
        element: HTMLElement;
        options: FacetOptions;
        static ID: string;
        static omniboxIndex: number;
        static options: FacetOptions;
        facetQueryController: FacetQueryController;
        keepDisplayedValuesNextTime: boolean;
        values: FacetValues;
        currentPage: number;
        numberOfValues: number;
        firstQuery: boolean;
        operatorAttributeId: string;
        facetSearch: FacetSearch;
        facetSettings: FacetSettings;
        facetSort: FacetSort;
        facetValuesList: FacetValuesList;
        facetHeader: FacetHeader;
        _omniboxZIndex: any;
        _moreElement: JQuery;
        _lessElement: JQuery;
        private headerElement;
        private footerElement;
        private canFetchMore;
        private nbAvailableValues;
        private showingWaitAnimation;
        private pinnedViewportPosition;
        private pinnedTopSpace;
        private pinnedBottomSpace;
        private componentStateId;
        private includedAttributeId;
        private excludedAttributeId;
        private lookupValueAttributeId;
        private listenToQueryStateChange;
        private resize;
        constructor(element: HTMLElement, options: FacetOptions, bindings?: ComponentBindings, facetClassId?: string);
        createDom(): void;
        selectValue(value: FacetValue): void;
        selectValue(value: string): void;
        selectMultipleValues(values: FacetValue[]): void;
        selectMultipleValues(values: string[]): void;
        deselectValue(value: FacetValue): void;
        deselectValue(value: string): void;
        deselectMultipleValues(values: FacetValue[]): void;
        deselectMultipleValues(values: string[]): void;
        excludeValue(value: FacetValue): void;
        excludeValue(value: string): void;
        excludeMultipleValues(values: FacetValue[]): void;
        excludeMultipleValues(values: string[]): void;
        unexcludeValue(value: FacetValue): void;
        unexcludeValue(value: string): void;
        unexcludeMultipleValues(values: FacetValue[]): void;
        unexcludeMultipleValues(values: string[]): void;
        toggleSelectValue(value: FacetValue): void;
        toggleSelectValue(value: string): void;
        toggleExcludeValue(value: FacetValue): void;
        toggleExcludeValue(value: string): void;
        getDisplayedValues(): string[];
        getDisplayedFacetValues(): FacetValue[];
        getSelectedValues(): string[];
        getExcludedValues(): string[];
        reset(): void;
        switchToAnd(): void;
        switchToOr(): void;
        getEndpoint(): SearchEndpointInterface;
        updateSort(criteria: string): void;
        unfadeInactiveValuesInMainList(): void;
        fadeInactiveValuesInMainList(delay: number): void;
        showWaitingAnimation(): void;
        hideWaitingAnimation(): void;
        processFacetSearchAllResultsSelected(facetValues: FacetValue[]): void;
        pinFacetPosition(): void;
        getValueCaption(facetValue: IndexFieldValue): string;
        getValueCaption(facetValue: FacetValue): string;
        enable(): void;
        disable(): void;
        triggerNewQuery(beforeExecuteQuery?: () => void): void;
        protected handleDeferredQuerySuccess(e: JQueryEventObject, data: QuerySuccessEventArgs): void;
        protected handlePopulateBreadcrumb(e: JQueryEventObject, args: PopulateBreadcrumbEventArgs): void;
        protected initFacetQueryController(): void;
        protected initFacetValuesList(): void;
        protected initFacetSearch(): void;
        protected facetValueHasChanged(): void;
        protected updateAppearanceDependingOnState(): void;
        protected initQueryEvents(): void;
        protected initQueryStateEvents(): void;
        protected initComponentStateEvents(): void;
        protected initOmniboxEvents(): void;
        protected initBreadCrumbEvents(): void;
        protected handleOmniboxWithStaticValue(eventArg: PopulateOmniboxEventArgs): void;
        protected processNewGroupByResults(groupByResult: GroupByResult): void;
        protected updateQueryStateModel(): void;
        protected rebuildValueElements(): void;
        protected updateSearchInNewDesign(moreValuesAvailable?: boolean): void;
        protected updateMoreLess(): void;
        protected handleClickMore(): void;
        protected handleClickLess(): void;
        private handleNuke();
        private checkForComputedFieldAndSort();
        private checkForValueCaptionType();
        private checkForCustomSort();
        private initBottomAndTopSpacer();
        private updateIncludedQueryStateModel();
        private updateExcludedQueryStateModel();
        private updateLookupValueQueryStateModel();
        private handleQueryStateChangedOperator(operator);
        private handleQueryStateChangedIncluded(includedChanged);
        private handleQueryStateChangedExcluded(excludedChanged);
        private handleLookupvalueChanged(lookupFieldChanged);
        private handleQueryStateChanged(e, data);
        private handlePopulateOmnibox(e, data);
        private handleOmniboxWithSearchInFacet(eventArg);
        private handleDuringQuery();
        private handleBuildingQuery(e, data);
        private handleDoneBuildingQuery(e, data);
        private handleClearBreadcrumb(e, args);
        private updateValues(facetValues);
        private ensureFacetValueIsInList(facetValue);
        private isAnyValueCurrentlyDisplayed();
        private handleEraserClick();
        private buildFacetContent();
        private buildHeader();
        protected buildLess(): JQuery;
        private unpinFacetPosition();
        private isFacetPinned();
        private ensurePinnedFacetHasntMoved();
        private buildFooter();
        private buildMore();
        private triggerMoreQuery();
        private triggerUpdateDeltaQuery(facetValues);
        protected updateNumberOfValues(): void;
        private getMinimumNumberOfValuesToDisplay();
        private updateVisibilityBasedOnDependsOn();
        private doesParentFacetHasSelectedValue();
        private shouldRenderFacetSearch();
        private shouldRenderMoreLess();
        debugInfo(): any;
    }
}
declare module Coveo {
    class Options {
        merge<T>(provided: T): T;
        mergeDeep<T>(provided: T): T;
    }
}
declare module Coveo {
    interface DateToStringOptions {
        now?: Date;
        useTodayYesterdayAndTomorrow?: boolean;
        useWeekdayIfThisWeek?: boolean;
        omitYearIfCurrentOne?: boolean;
        useLongDateFormat?: boolean;
        includeTimeIfToday?: boolean;
        includeTimeIfThisWeek?: boolean;
        alwaysIncludeTime?: boolean;
        predefinedFormat?: string;
    }
    class DateUtils {
        static convertFromJsonDateIfNeeded(date: string): Date;
        static convertFromJsonDateIfNeeded(date: number): Date;
        static convertFromJsonDateIfNeeded(date: Date): Date;
        static keepOnlyDatePart(date: Date): Date;
        static offsetDateByDays(date: Date, offset: number): Date;
        static dateToString(date: Date, options?: DateToStringOptions): string;
        static timeToString(date: Date, options?: DateToStringOptions): string;
        static dateTimeToString(date: Date, options?: DateToStringOptions): string;
        static monthToString(month: number): string;
        static isValid(date: any): boolean;
        static timeBetween(from: Date, to: Date): string;
    }
}
declare module Coveo {
    class FacetRangeQueryController extends FacetQueryController {
        facet: FacetRange;
        graphGroupByQueriesIndex: number;
        constructor(facet: FacetRange);
        protected createBasicGroupByRequest(allowedValues?: string[], addComputedField?: boolean): GroupByRequest;
        protected createGroupByAllowedValues(): string[];
        private buildGroupByQueryForAutomaticRanges(groupByQuery);
        private buildGroupByQueryForPredefinedRanges(groupByQuery);
        private buildGroupByQueryForSelectedAndExcludedValues(groupByQuery);
        private getISOFormat(value);
        private getBrowserCompatibleFormat(value);
    }
}
declare module Coveo {
    interface FacetRangeOptions extends FacetOptions {
        ranges?: RangeValue[];
        dateField?: boolean;
    }
    class FacetRange extends Facet {
        element: HTMLElement;
        static ID: string;
        static parent: typeof Facet;
        static options: FacetRangeOptions;
        options: FacetRangeOptions;
        constructor(element: HTMLElement, options: FacetRangeOptions, bindings?: ComponentBindings);
        getValueCaption(facetValue: any): string;
        protected initFacetQueryController(): void;
        protected processNewGroupByResults(groupByResult: GroupByResult): void;
    }
}
declare module Coveo {
    interface SliderGraphData {
        start: any;
        y: number;
        end: any;
        isDate?: boolean;
    }
    interface SliderOptions {
        start?: any;
        end?: any;
        excludeOuterBounds?: boolean;
        steps?: number;
        getSteps?: (start: number, end: number) => number[];
        rangeSlider?: boolean;
        displayAsValue?: {
            enable?: boolean;
            unitSign?: string;
            separator?: string;
        };
        displayAsPercent?: {
            enable?: boolean;
            separator?: string;
        };
        valueCaption?: (values: number[]) => string;
        percentCaption?: (percent: number[]) => string;
        dateFormat?: string;
        document?: Document;
        graph?: {
            steps?: number;
            animationDuration?: number;
            margin?: {
                top?: number;
                bottom?: number;
                left?: number;
                right?: number;
            };
        };
        dateField?: boolean;
        rounded?: number;
    }
    class Slider {
        element: JQuery;
        options: SliderOptions;
        root: HTMLElement;
        steps: number[];
        currentValues: number[];
        private sliderButton;
        private sliderRange;
        private sliderLine;
        private sliderCaption;
        private sliderGraph;
        constructor(element: JQuery, options: SliderOptions, root: HTMLElement);
        onMoving(): void;
        initializeState(values?: number[]): void;
        getPosition(): number[];
        getPercentPosition(): number[];
        getValues(): any[];
        getCaptionFromValue(values: number[]): string;
        getCaption(): string;
        setValues(values: number[]): void;
        drawGraph(data?: SliderGraphData[]): void;
        private displayCaption();
        private buildSteps();
    }
    class SliderButton {
        slider: Slider;
        private which;
        leftBoundary: number;
        rightBoundary: number;
        element: JQuery;
        private currentPos;
        private startPositionX;
        private isMouseDown;
        private lastElementLeft;
        private origUserSelect;
        private origCursor;
        private origZIndex;
        private eventMouseDown;
        private eventMouseMove;
        private eventMouseUp;
        constructor(slider: Slider, which: number);
        build(): JQuery;
        toBeginning(): void;
        toEnd(): void;
        setValue(value: number): void;
        getPosition(): number;
        getPercent(position?: number): number;
        getValue(): any;
        fromValueToPercent(value: number): number;
        fromPositionToValue(position: number): any;
        fromValueToPosition(value: number): number;
        private bindEvents();
        private handleStartSlide(e);
        private handleMoving(e);
        private handleEndSlide(e);
        private handleButtonNearEnd();
        private getMousePosition(e);
        private updatePosition(e);
        private snapToStep(spanX);
    }
}
declare module Coveo {
    class FacetSliderQueryController {
        facet: FacetSlider;
        graphGroupByQueriesIndex: number;
        private rangeValuesForGraphToUse;
        lastGroupByRequestIndex: number;
        constructor(facet: FacetSlider);
        prepareForNewQuery(): void;
        putGroupByIntoQueryBuilder(queryBuilder: QueryBuilder): void;
        createBasicGroupByRequest(allowedValues?: string[], addComputedField?: boolean): GroupByRequest;
        computeOurFilterExpression(boundary?: number[]): string;
        private handleQuerySuccess(e, args);
        private addFilterExpressionWithOuterBoundsIncluded(start, end, builder);
        private addFilterExpressionWithOuterBoundsExcluded(start, end, builder);
        private buildGroupByQueryForSlider(groupByQuery);
        private buildGroupByQueryForAutomaticRanges(groupByQuery);
        private putGroupByForGraphIntoQueryBuilder(queryBuilder);
        private putGroupByForSliderIntoQueryBuilder(queryBuilder);
        private createRangeValuesForGraph(basicRangeRequest);
        private usePrebuiltRange(basicRangeRequest);
        private buildRange(basicRangeRequest);
        private getISOFormat(value);
        private getFilterDateFormat(rawValue);
        private getBrowserCompatibleFormat(value);
    }
}
declare module Coveo {
    interface StartSlideEventArgs {
        slider: Slider;
        button: SliderButton;
    }
    interface DuringSlideEventArgs {
        slider: Slider;
        button: SliderButton;
    }
    interface EndSlideEventArgs {
        slider: Slider;
        button: SliderButton;
    }
    interface GraphValueSelectedArgs {
        start: any;
        end: any;
        value: any;
    }
    class SliderEvents {
        static startSlide: string;
        static duringSlide: string;
        static endSlide: string;
        static graphValueSelected: string;
    }
}
declare module Coveo.FeatureDetectionUtils {
    function supportSVG(): boolean;
}
declare module Coveo {
    interface FacetSliderOptions extends SliderOptions {
        dateField?: boolean;
        queryOverride?: string;
        id?: string;
        field?: string;
        title?: string;
    }
    class FacetSlider extends Component {
        element: HTMLElement;
        options: FacetSliderOptions;
        static options: FacetSliderOptions;
        static ID: string;
        startOfSlider: number;
        endOfSlider: number;
        initialStartOfSlider: number;
        initialEndOfSlider: number;
        facetQueryController: FacetSliderQueryController;
        private slider;
        private rangeQueryStateAttribute;
        private isEmpty;
        private rangeFromUrlState;
        private facetHeader;
        constructor(element: HTMLElement, options: FacetSliderOptions, bindings?: ComponentBindings);
        createDom(): void;
        reset(): void;
        getSelectedValues(): string[];
        getSliderBoundaryForQuery(): any[];
        private handleNoresults();
        private handleNewQuery();
        private handleRangeQueryStateChanged(e, args);
        private handlePopulateBreadcrumb(e, args);
        private sliderIsActive();
        private buildBreadcrumbFacetSlider();
        private initSlider();
        private initQueryStateEvents();
        private setRangeStateSliderStillNotCreated(e, args);
        private buildSlider();
        private handleBuildingQuery(e, data);
        private handleDoneBuildingQuery(e, data);
        private handleDeferredQuerySuccess(e, data);
        private handleEndSlide(e, args);
        private handleDuringSlide(e, args);
        private handleGraphValueSelected(e, args);
        private updateQueryState(values?, silent?);
        private copyValues(values);
        private renderToSliderGraph(data);
        private generateBoundary();
        private generateBoundaryFromSlider();
        private generateBoundaryFromState();
        private setupSliderIfNeeded(data);
        private verifySetup();
        private setupSliderStateVariables();
        private alreadySetBoundary();
        private trySetSliderBoundaryFromOptions();
        private trySetSliderBoundaryFromState();
        private trySetSliderBoundaryFromQueryResult(data);
        private setupInitialSliderStateStart(value);
        private setupInitialSliderStateEnd(value);
        private hasAGraph();
        private updateAppearanceDependingOnState(sliding?);
    }
}
declare module Coveo {
    interface FieldValueOptions {
        field?: string;
        facet?: string;
        htmlValue?: boolean;
        helper?: string;
        helperOptions?: {
            [key: string]: any;
        };
        splitValues?: boolean;
    }
    interface AnalyticsFieldValueMeta {
        facetId: string;
        facetValue?: string;
        facetTitle?: string;
    }
    class FieldValue extends Component {
        element: HTMLElement;
        options: FieldValueOptions;
        result: QueryResult;
        static ID: string;
        static options: FieldValueOptions;
        static simpleOptions: any;
        static helperOptions: any;
        constructor(element: HTMLElement, options?: FieldValueOptions, bindings?: ComponentBindings, result?: QueryResult, fieldValueClassId?: string);
        protected getValueContainer(): HTMLElement;
        getValue(): any;
        private getHelperOptions();
        private getFullDate(date, helper);
        renderOneValue(value: string): HTMLSpanElement;
        private bindEventOnValue(element, value);
    }
}
declare module Coveo {
    interface BadgeOptions extends FieldValueOptions {
        colors: BadgeColors;
    }
    interface BadgeColors extends BadgeColor {
        values?: {
            [value: string]: BadgeColors;
        };
    }
    interface BadgeColor {
        icon?: string;
        text?: string;
    }
    class Badge extends FieldValue {
        options: BadgeOptions;
        static ID: string;
        static options: BadgeOptions;
        static parent: typeof FieldValue;
        constructor(element: HTMLElement, options?: BadgeOptions, bindings?: ComponentBindings, result?: QueryResult);
        getColor(value: string): BadgeColor;
        private static colorRegex;
        private static colorsRegex;
        static parseColors(colorsOption: string): BadgeColors;
        renderOneValue(value: string): HTMLSpanElement;
    }
}
declare module Coveo {
    interface FieldTableOptions {
        expandedTitle: string;
        minimizedTitle: string;
        allowMinimization: boolean;
        minimizedByDefault: boolean;
    }
    class FieldTable extends Component {
        element: HTMLElement;
        options: FieldTableOptions;
        result: QueryResult;
        static ID: string;
        static options: FieldTableOptions;
        private expanded;
        private toggleButton;
        private toggleIcon;
        private toggleCaption;
        private toggleButtonInsideTable;
        private toggleContainer;
        constructor(element: HTMLElement, options?: FieldTableOptions, bindings?: ComponentBindings, result?: QueryResult);
        toggle(anim?: boolean): void;
        open(anim?: boolean): void;
        close(anim?: boolean): void;
        protected isTogglable(): boolean;
        private buildToggle();
    }
    interface ValueRowOptions extends FieldValueOptions {
        caption?: string;
    }
}
declare module Coveo {
    interface IconOptions {
        value?: string;
        small?: boolean;
        withLabel?: boolean;
        labelValue?: string;
    }
    class Icon extends Component {
        element: HTMLElement;
        options: IconOptions;
        result: QueryResult;
        static ID: string;
        static options: IconOptions;
        static fields: string[];
        constructor(element: HTMLElement, options?: IconOptions, bindings?: ComponentBindings, result?: QueryResult);
        static createIcon(result: QueryResult, options?: IconOptions, element?: JQuery, bindings?: ComponentBindings): JQuery;
        static shouldDisplayLabel(options: IconOptions, bindings: ComponentBindings): boolean;
        static preprocessIconInfo(options: IconOptions, info: FileTypes.FileTypeInfo): FileTypes.FileTypeInfo;
    }
}
declare module Coveo {
    interface FoldingOptions {
        field?: string;
        childField?: string;
        parentField?: string;
        range?: number;
        rearrange?: SortCriteria;
        enableExpand?: boolean;
        expandExpression?: string;
        maximumExpandedResults?: number;
        /**
         * Manage folding for each results individually
         */
        getResult?: (result: QueryResult) => QueryResult;
        /**
         * Manage folding of all more results
         */
        getMoreResults?: (results: QueryResult[]) => QueryResult[];
    }
    class Folding extends Component {
        element: HTMLElement;
        options: FoldingOptions;
        static ID: string;
        static options: FoldingOptions;
        /**
         * Convert ResultNode to QueryResult
         */
        private static resultNodeToQueryResult(resultNode);
        /**
         * Find the node in trees
         */
        private static findUniqueId(resultNodes, uniqueId);
        /**
         * From a list of results, return a list of results and their attachments
         * We use parentResult to build a tree of result
         */
        static foldWithParent(queryResults: QueryResult[]): QueryResult[];
        /**
         * 99.9% of the folding case will be alright with those default functions.
         * Otherwise use the options getResult and getMoreResults
         */
        static defaultGetResult(result: QueryResult): QueryResult;
        static defaultGetMoreResults(results: QueryResult[]): QueryResult[];
        constructor(element: HTMLElement, options: FoldingOptions, bindings?: ComponentBindings);
        private handleBuildingQuery(e, data);
        private handlepreprocessResults(e, data);
        private addLoadMoreHandler(results, originalQuery);
        private moreResults(result, originalQuery);
        private handlePreprocessMoreResults(queryResults);
    }
}
declare module Coveo {
    class FoldingForThread extends Folding {
        element: HTMLElement;
        options: FoldingOptions;
        static ID: string;
        constructor(element: HTMLElement, options: FoldingOptions, bindings?: ComponentBindings);
    }
}
declare module Coveo {
    interface HiddenQueryOptions {
        maximumDescriptionLength: number;
        title: string;
    }
    class HiddenQuery extends Component {
        element: HTMLElement;
        options: HiddenQueryOptions;
        static ID: string;
        static options: HiddenQueryOptions;
        constructor(element: HTMLElement, options?: HiddenQueryOptions, bindings?: ComponentBindings);
        private handleBuildingQuery(e, data);
        private handlePopulateBreadcrumb(e, args);
        private clearHiddenQuery();
        private getDescription();
    }
}
declare module Coveo {
    class HierarchicalFacetQueryController extends FacetQueryController {
        facet: HierarchicalFacet;
        private lastGroupByIndexForCountOf;
        lastGroupByForCountOf: GroupByResult;
        constructor(facet: HierarchicalFacet);
        _createBasicGroupByRequest(): GroupByRequest;
        protected buildListFieldValuesRequest(params: FacetSearchParameters): ListFieldValuesRequest;
    }
}
declare module Coveo {
    class HierarchicalFacetValueElement extends FacetValueElement {
        facet: HierarchicalFacet;
        facetValue: FacetValue;
        keepDisplayedValueNextTime: boolean;
        constructor(facet: HierarchicalFacet, facetValue: FacetValue, keepDisplayedValueNextTime: boolean);
    }
}
declare module Coveo {
    class HierarchicalFacetValuesList extends FacetValuesList {
        facet: HierarchicalFacet;
        facetValueElementKlass: FacetValueElementKlass;
        hierarchyFacetValues: FacetValue[];
        constructor(facet: HierarchicalFacet, facetValueElementKlass: FacetValueElementKlass);
        _getValuesToBuildWith(): FacetValue[];
    }
}
declare module Coveo {
    class OmniboxHierarchicalValueElement extends OmniboxValueElement {
        facet: HierarchicalFacet;
        facetValue: FacetValue;
        eventArg: PopulateOmniboxObject;
        constructor(facet: HierarchicalFacet, facetValue: FacetValue, eventArg: PopulateOmniboxObject);
        _handleSelectValue(eventBindings: ValueElementEventsBinding): void;
        _handleExcludeClick(eventBindings: ValueElementEventsBinding): void;
    }
}
declare module Coveo {
    class OmniboxHierarchicalValuesList extends OmniboxValuesList {
        facet: HierarchicalFacet;
        facetValues: FacetValue[];
        omniboxObject: PopulateOmniboxObject;
        constructor(facet: HierarchicalFacet, facetValues: FacetValue[], omniboxObject: PopulateOmniboxObject);
    }
}
declare module Coveo {
    class HierarchicalBreadcrumbValueElement extends BreadcrumbValueElement {
        facet: HierarchicalFacet;
        facetValue: FacetValue;
        constructor(facet: HierarchicalFacet, facetValue: FacetValue);
        build(): JQuery;
    }
}
declare module Coveo {
    class HierarchicalBreadcrumbValuesList extends BreadcrumbValueList {
        facet: HierarchicalFacet;
        facetValues: FacetValue[];
        valueHierarchy: {
            [facetValue: string]: ValueHierarchy;
        };
        constructor(facet: HierarchicalFacet, facetValues: FacetValue[], valueHierarchy: {
            [facetValue: string]: ValueHierarchy;
        });
    }
}
declare module Coveo {
    class HierarchicalFacetSearchValueElement extends FacetValueElement {
        facet: HierarchicalFacet;
        facetValue: FacetValue;
        keepDisplayedValueNextTime: boolean;
        constructor(facet: HierarchicalFacet, facetValue: FacetValue, keepDisplayedValueNextTime: boolean);
        _handleSelectValue(eventBindings: ValueElementEventsBinding): void;
        _handleExcludeClick(eventBindings: ValueElementEventsBinding): void;
    }
}
declare module Coveo {
    class HierarchicalFacetSearchValuesList extends FacetSearchValuesList {
        facet: Facet;
        constructor(facet: Facet);
    }
}
declare module Coveo {
    class HierarchicalFacetSearch extends FacetSearch {
        facet: HierarchicalFacet;
        facetSearchValuesListKlass: FacetSearchValuesListKlass;
        constructor(facet: HierarchicalFacet, facetSearchValuesListKlass: FacetSearchValuesListKlass);
        protected buildParamsForExcludingCurrentlyDisplayedValues(): FacetSearchParameters;
    }
}
declare module Coveo {
    interface HierarchicalFacetOptions extends FacetOptions {
        delimitingCharacter?: string;
        levelStart?: number;
        levelEnd?: number;
        marginByLevel?: number;
    }
    interface ValueHierarchy {
        childs?: ValueHierarchy[];
        parent?: ValueHierarchy;
        originalPosition?: number;
        facetValue: FacetValue;
        level: number;
        keepOpened: boolean;
        hasChildSelected: boolean;
    }
    class HierarchicalFacet extends Facet {
        element: HTMLElement;
        bindings: ComponentBindings;
        static ID: string;
        static options: HierarchicalFacetOptions;
        static parent: typeof Facet;
        options: HierarchicalFacetOptions;
        facetValuesList: HierarchicalFacetValuesList;
        numberOfValuesToShow: number;
        facetQueryController: HierarchicalFacetQueryController;
        private valueHierarchy;
        private originalPosition;
        private firstPlacement;
        private originalNumberOfValuesToShow;
        private topLevelHierarchy;
        private correctLevels;
        constructor(element: HTMLElement, options: HierarchicalFacetOptions, bindings: ComponentBindings);
        selectValue(value: FacetValue, selectChilds?: boolean): void;
        selectValue(value: string, selectChilds?: boolean): void;
        selectMultipleValues(values: FacetValue[], selectChilds?: boolean): void;
        selectMultipleValues(values: string[], selectChilds?: boolean): void;
        deselectValue(value: FacetValue, deselectChilds?: boolean): void;
        deselectValue(value: string, deselectChilds?: boolean): void;
        excludeValue(value: FacetValue, excludeChilds?: boolean): void;
        excludeValue(value: string, excludeChilds?: boolean): void;
        unexcludeValue(value: FacetValue, unexludeChilds?: boolean): void;
        unexcludeValue(value: string, unexludeChilds?: boolean): void;
        deselectMultipleValues(values: FacetValue[], deselectChilds?: boolean): void;
        deselectMultipleValues(values: string[], deselectChilds?: boolean): void;
        toggleSelectValue(value: FacetValue): void;
        toggleSelectValue(value: string): void;
        toggleExcludeValue(value: FacetValue): void;
        toggleExcludeValue(value: string): void;
        getValueCaption(facetValue: IndexFieldValue): string;
        getValueCaption(facetValue: FacetValue): string;
        getDisplayedValues(): string[];
        updateSort(criteria: string): void;
        open(value: FacetValue): any;
        open(value: ValueHierarchy): any;
        close(value: FacetValue): any;
        close(value: ValueHierarchy): any;
        protected facetValueHasChanged(): void;
        reset(): void;
        protected initFacetQueryController(): void;
        protected initFacetSearch(): void;
        protected handleDeferredQuerySuccess(e: JQueryEventObject, data: QuerySuccessEventArgs): void;
        protected handlePopulateBreadcrumb(e: JQueryEventObject, args: PopulateBreadcrumbEventArgs): void;
        protected handleOmniboxWithStaticValue(eventArg: PopulateOmniboxEventArgs): void;
        protected rebuildValueElements(): void;
        protected initFacetValuesList(): void;
        protected updateMoreLess(): void;
        protected handleClickMore(): void;
        protected handleClickLess(): void;
        protected updateNumberOfValues(): void;
        private ensureValueHierarchyExists(facetValues);
        private crop();
        private placeChildsUnderTheirParent(hierarchy, hierarchyElement);
        private addCssClassToParentAndChilds(hierarchy, hierarchyElement);
        private buildParentChildRelationship();
        private setValueListContent();
        private createHierarchy(valuesToBuildWith);
        private processHierarchy(facetValues?);
        private setInHierarchy(flatHierarchy);
        private getParent(value);
        private getSelf(value);
        private showFacetValue(value);
        private hideFacetValue(value);
        private hideChilds(children);
        private showChilds(children);
        private hideParent(parent);
        private showParent(parent);
        private selectChilds(parent, children);
        private deselectChilds(parent, children);
        private excludeChilds(children);
        private unexcludeChilds(children);
        private selectParent(parent);
        private deselectParent(parent);
        private flagParentForSelection(valueHierarchy);
        private unflagParentForSelection(valueHierarchy);
        private getValueFromHierarchy(value);
        private getFacetValueFromHierarchy(value);
        private getLookupOrValue(value);
        private getElementFromFacetValueList(value);
        private getFromFacetValueList(value);
        private getLevel(value);
        private getAllValueHierarchy();
        private deleteValueHierarchy(key);
        private getValueHierarchy(key);
        private setValueHierarchy(key, value);
    }
}
declare module Coveo {
    interface AnchorUtilsOptions {
        text?: string;
        target?: string;
        class?: string;
    }
    interface ImageUtilsOptions {
        alt?: string;
        height?: string;
        width?: string;
    }
    class HTMLUtils {
        static buildAttributeString(options: any): string;
    }
    class AnchorUtils {
        static buildAnchor(href: string, options?: AnchorUtilsOptions): string;
    }
    class ImageUtils {
        static buildImage(src?: string, options?: ImageUtilsOptions): string;
        static selectImageFromResult(result: QueryResult): JQuery;
        static buildImageWithDirectSrcAttribute(endpoint: SearchEndpoint, result: QueryResult): void;
        static buildImageWithBase64SrcAttribute(endpoint: SearchEndpoint, result: QueryResult): void;
        static buildImageFromResult(result: QueryResult, endpoint: SearchEndpoint, options?: ImageUtilsOptions): string;
    }
}
declare module Coveo {
    class EmailUtils {
        static splitSemicolonSeparatedListOfEmailAddresses(addresses: string): string[];
        static emailAddressesToHyperlinks(addresses: string[], companyDomain?: string, me?: string, lengthLimit?: number, truncateName?: boolean): string;
        static buildEmailAddressesAndOthers(excessHyperLinks: string[]): string;
        static parseEmail(email: string): string[];
    }
}
declare module Coveo {
    interface CurrencyToStringOptions {
        decimals?: number;
        symbol?: string;
    }
    class CurrencyUtils {
        static currencyToString(value: number, options?: CurrencyToStringOptions): string;
    }
}
declare module Coveo {
    class Hole {
        begin: number;
        size: number;
        replacementSize: number;
        constructor(begin: number, size: number, replacementSize: number);
    }
    class StringAndHoles {
        value: string;
        holes: Hole[];
        static SHORTEN_END: string;
        static WORD_SHORTER: number;
        static replace(str: string, find: string, replace: string): StringAndHoles;
        static shortenPath(uriOrig: string, length: number): StringAndHoles;
        static shortenString(toShortenOrig: string, length?: number, toAppend?: string): StringAndHoles;
        static shortenUri(uri: string, length: number): StringAndHoles;
    }
    class HighlightUtils {
        static highlightString(content: string, highlights: Highlight[], holes: Hole[], cssClass: string): string;
        static buildHighlightedString(content: string, highlights: Highlight[], holes: Hole[], cssClass: string): string;
    }
    function highlightString(value: string, search: string): string;
}
declare module Coveo {
    interface StreamHighlightOptions {
        cssClass?: string;
        regexFlags?: string;
    }
    function highlightStreamHTML(stream: string, termsToHighlight: {
        [originalTerm: string]: string[];
    }, phrasesToHighlight: {
        [phrase: string]: {
            [originalTerm: string]: string[];
        };
    }, options?: StreamHighlightOptions): string;
    function highlightStreamText(stream: string, termsToHighlight: {
        [originalTerm: string]: string[];
    }, phrasesToHighlight: {
        [phrase: string]: {
            [originalTerm: string]: string[];
        };
    }, options?: StreamHighlightOptions): string;
}
interface Window {
    sforce: {
        console: {
            isInConsole: () => boolean;
            getPageInfo: (tabId: string, callback?: (result) => any) => void;
            openSubtab: (primaryTabId: string, url: string, active: boolean, tabLabel: string, tabId: string, callback?: (result) => any) => void;
            focusSubtabById: (tabId: string, callback?: (result) => any) => void;
            getSubtabIds: (primaryTabId?: string, callback?: (result) => any) => void;
            getFocusedPrimaryTabId: (callback?: (result) => any) => void;
            openPrimaryTab: (tabId: string, url: string, active: boolean, tabLabel?: string, callback?: (result) => any) => void;
            focusPrimaryTabById: (id: string, callback?: (result) => any) => void;
            getPrimaryTabIds: (callback?: (result) => any) => void;
        };
    };
}
declare module Coveo {
    class SalesforceUtilities {
        static isInSalesforce(): boolean;
        static isInSalesforceConsole(): boolean;
        static focusOrOpenTab(url: string, tabText: string, openInPrimaryTab?: boolean): void;
        static getSfIdFromUrl(url: string): string;
        static expandStringUsingRecord(value: string, record: any): string;
        static expandStringUsingExpert(value: string, expert: any): string;
        static cleanSentenceForQuery(sentence: string): string;
    }
}
declare module Coveo {
    class ChatterUtils {
        static buildURI(objectURI: string, objectId: string, newObjectId: string): string;
        static bindCLickEventToElement(element: JQuery, openInPrimaryTab: boolean, openInSubTab: boolean): JQuery;
    }
}
declare module Coveo {
}
declare module Coveo {
    class EmailActionsUtils {
        static buildMailToString(options: MailToOptions): string;
        static buildMailToParametersString(subject: string, cc: string, bcc: string, body: string, mailTo: string): string;
        static getShortenBody(body: string, mailTo: string): string;
        static buildMailToParameter(name: string, param: string): string;
        static shortenString(str: string, maxLength: number, encodeShortenBodyIndication?: boolean): string;
        static appendShortenBodyToMailToString(mailTo: string, body: string): string;
        static removeCurrentUserEmailFromString(currentUserEmail: string, str: string): string;
        static buildReplyMailToFromResult(result: QueryResult, currentUserEmail: string): MailTo;
        static buildReplyAllMailToFromResult(result: QueryResult, currentUserEmail: string): MailTo;
        static buildForwardMailToFromResult(result: QueryResult, currentUserEmail: string): MailTo;
        static encodeMailToBody(body: string): string;
    }
}
declare module Coveo {
    interface MailToOptions {
        currentUserEmail?: string;
        originalFrom?: string;
        to?: string;
        subject?: string;
        cc?: string;
        bcc?: string;
        body?: string;
        bodyIsHTML?: boolean;
    }
    class DefaultMailToOptions extends Options implements MailToOptions {
        currentUserEmail: string;
        originalFrom: string;
        to: string;
        subject: string;
        cc: string;
        bcc: string;
        body: string;
        bodyIsHTML: boolean;
    }
    class MailTo {
        options: MailToOptions;
        private value;
        private toArray;
        private ccArray;
        private bccArray;
        private body;
        private bodyHeader;
        static enter: string;
        static shortenBodyIndicator: string;
        static maxLength: number;
        static phonegapMaxLength: number;
        constructor(options?: MailToOptions);
        private removeCurrentUserFromParameters();
        private setRecipientsArrays();
        open(): void;
        private getEmailOpenerObject(shortenBody);
        private ensureValueIsSet();
        private setValue();
        private setValueBody();
        setMailToBodyFromText(text?: string): void;
        private valueBodyIsSet();
        bodyIsSet(): boolean;
    }
}
declare module Coveo {
    interface EmailActionsOptions {
        currentUserEmail?: string;
        reply?: boolean;
        replyAll?: boolean;
        forward?: boolean;
    }
    class EmailActions extends Coveo.Component {
        element: HTMLElement;
        options: EmailActionsOptions;
        private result;
        static ID: string;
        static options: EmailActionsOptions;
        private reply;
        private replyAll;
        private forward;
        loadingAnimation: HTMLElement;
        constructor(element: HTMLElement, options: EmailActionsOptions, bindings?: ComponentBindings, result?: QueryResult);
        private createAndAppendEmailActions();
        private appendWaitingAnimation();
    }
}
declare module Coveo {
    interface EmailActionOptions {
        type: string;
        currentUserEmail?: string;
    }
    class EmailAction extends Coveo.Component {
        element: HTMLElement;
        private actions;
        options: EmailActionOptions;
        private result;
        static ID: string;
        static options: EmailActionOptions;
        static forward: string;
        static reply: string;
        static replyAll: string;
        private mailTo;
        constructor(element: HTMLElement, actions: EmailActions, options?: EmailActionOptions, bindings?: ComponentBindings, result?: QueryResult);
        private showWaitingAnimation();
        private hideWaitingAnimation();
        private setMailToFromResult();
        private appendBodyToMailTo(callback);
        private doneRetrieveBody(res, callback);
        private openMailTo();
    }
}
declare module Coveo.PhonegapUtils {
    function bindOpenLinkInPhonegap(element: HTMLElement, uri: string): void;
    function openInPhonegap(uri: string): void;
}
declare module Coveo {
    interface QuickviewDocumentOptions {
        maximumDocumentSize?: number;
    }
    class QuickviewDocument extends Component {
        element: HTMLElement;
        options: QuickviewDocumentOptions;
        result: QueryResult;
        static ID: string;
        static options: QuickviewDocumentOptions;
        private iframe;
        private header;
        private termsToHighlightWereModified;
        private keywordsState;
        constructor(element: HTMLElement, options?: QuickviewDocumentOptions, bindings?: ComponentBindings, result?: QueryResult);
        createDom(): void;
        open(): void;
        private renderHTMLDocument(iframe, html);
        private renderErrorReport(iframe);
        private writeToIFrame(iframe, content);
        private writeToIFrame(iframe, content);
        private bindOpenIframeLinksInPhonegap(iframe);
        private wrapPreElementsInIframe(iframe);
        private triggerQuickviewLoaded(beforeLoad);
        computeHighlights(window: Window): string[];
        private getHighlightIdParts(element);
        private getHighlightInnerText(element);
        private getHightlightEmbeddedWordIdParts(element);
        private resolveOriginalTermFromHighlight(highlight);
        private buildWordButton(wordState, window);
        private navigate(state, backward, window);
        private buildHeader();
        private buildIFrame();
        private getScrollingElement(iframeWindow);
        private isNewQuickviewDocument(iframeWindow);
        private handleTermsToHighlight(termsToHighlight, queryObject);
        private checkIfTermsToHighlightWereModified(termsToHighlight);
        private getSaturatedColor(color);
    }
}
declare module Coveo {
    class DefaultQuickviewTemplate extends Template {
        constructor();
        instantiateToString(queryResult?: QueryResult): string;
    }
}
declare module Coveo {
    interface QuickviewOptions {
        title?: string;
        showDate?: boolean;
        contentTemplate?: Template;
        enableLoadingAnimation?: boolean;
        loadingAnimation?: HTMLElement;
        alwaysShow?: boolean;
        size?: string;
    }
    class Quickview extends Component {
        element: HTMLElement;
        options: QuickviewOptions;
        bindings: ResultsComponentBindings;
        result: QueryResult;
        static ID: string;
        static fields: string[];
        static options: QuickviewOptions;
        private link;
        private modalbox;
        constructor(element: HTMLElement, options?: QuickviewOptions, bindings?: ResultsComponentBindings, result?: QueryResult);
        open(): void;
        getHashId(): string;
        close(): void;
        private bindClick(result);
        private bindQuickviewEvents(openerObject);
        private animateAndOpen();
        private createModalBox(openerObject);
        private prepareOpenQuickviewObject();
        private prepareQuickviewContent(loadingAnimation);
        private bindEscape();
        private bindIFrameEscape();
        private closeQuickview();
        private setQuickviewSize();
    }
}
declare module Coveo {
    interface ResultListOptions {
        resultContainer?: HTMLElement;
        resultTemplate?: Template;
        resultOptions?: {};
        waitAnimationContainer?: HTMLElement;
        enableInfiniteScroll?: boolean;
        infiniteScrollPageSize?: number;
        infiniteScrollContainer?: HTMLElement;
        waitAnimation?: string;
        mobileScrollContainer?: HTMLElement;
        enableInfiniteScrollWaitingAnimation?: boolean;
        fieldsToInclude?: string[];
        autoSelectFieldsToInclude?: boolean;
    }
    class ResultList extends Component {
        element: HTMLElement;
        options: ResultListOptions;
        bindings: ComponentBindings;
        static ID: string;
        static options: ResultListOptions;
        private currentlyDisplayedResults;
        private fetchingMoreResults;
        private reachedTheEndOfResults;
        private resetList;
        private pageChanged;
        constructor(element: HTMLElement, options?: ResultListOptions, bindings?: ComponentBindings, elementClassId?: string);
        private handlePageChanged();
        handleNewQuery(): void;
        handleBuildingQuery(e: any, args: BuildingQueryEventArgs): void;
        getAutoSelectedFieldsToInclude(): string[];
        displayMoreResults(count: number, triggeredByUser: boolean): void;
        _triggerNewResultDisplayed(result: QueryResult, resultElement: HTMLElement): void;
        _buildResults(results: QueryResults): void;
        _instantiateTemplateForResult(result: QueryResult): HTMLElement;
        _autoCreateComponentsInsideResult(element: HTMLElement, result: QueryResult): void;
        private handleDuringQuery();
        private handleProcessNewQueryResults(e, data);
        private handleScrollOfResultList(event?);
        isCurrentlyFetchingMoreResults(): boolean;
        private isScrollingOfResultListAlmostAtTheBottom();
        private isScrollAtBottomForWindowElement();
        private isScrollAtBottomForHtmlElement();
        hasPotentiallyMoreResultsToDisplay(): boolean;
        private cancelFetchingMoreResultsIfNeeded();
        private showOrHideElementsDependingOnState(hasQuery, hasResults);
        private showWaitingAnimation();
        private hideWaitingAnimation();
        private showWaitingAnimationForInfiniteScrolling();
        private hideWaitingAnimationForInfiniteScrolling();
    }
}
declare module Coveo {
    interface ImageResultListOptions extends ResultListOptions {
        layoutType?: string;
        heightThreshold?: number;
        columnWidth?: number;
    }
    class ImageResultList extends ResultList {
        element: HTMLElement;
        options: ImageResultListOptions;
        static ID: string;
        static rowLayoutTypeStr: string;
        static columnLayoutTypeStr: string;
        static options: ImageResultListOptions;
        private columnResultsArray;
        private imagesInCurrentRow;
        private imagesLoaded;
        private resultIndex;
        private lastRowHeight;
        constructor(element: HTMLElement, options?: ImageResultListOptions, bindings?: ComponentBindings, elementClassId?: string);
        private getResultsElement();
        private getResultsElementImages();
        private getResultsContainerDiv();
        private bindWindowResizeEvent();
        private handleNuke();
        private resize();
        private handleProcessNewResultsDisplayed();
        private addTransitionAllToElement(element);
        private retrieveLayoutMethod();
        private onImageProxy(callback);
        private getHorizontalMargin(element);
        private getVerticalMargin(element);
        private setupColumns();
        private positionColumns(colWidth, margin);
        private setResultsContainerHeight(height);
        private setupRows();
        private getCurrentRowHeight(results, containerWidth);
        private getImageDimensionsFromResult(result);
        private setCurrentRowImagesDimensions(images, height, top);
        private adjustNumberOfResults();
    }
}
declare module Coveo {
    class AjaxUtils<T> {
        static ajaxBasicAuth<T>(type: string, url: string, username: string, password: string, doneCallback: (data: T) => void, failCallBack?: (data: T) => void): void;
        static getBasicAuthBase64(username: string, password: string): string;
    }
}
declare module Coveo {
    class LoginCredentials {
        loginPanel: Login;
        private credentialContainer;
        private loginUser;
        private loginPassword;
        private userInputTemplate;
        private passwordInputTemplate;
        private containerTemplate;
        constructor(loginPanel: Login);
        buildDom(): void;
        show(): void;
        getUser(): string;
        setUser(user: string): void;
        getPassword(): string;
        setPassword(password: string): void;
        validate(): JQueryDeferred<{}>;
        submit(allValidationPassed: JQueryDeferred<boolean>): JQueryDeferred<{}>;
        private getLocalStorageKeyUser();
        private getLocalStorageKeyPassword();
        private getPasswordFromInput();
        private getUserFromInput();
        private handleInputKeypress(e);
    }
}
declare module Coveo {
    class PhonegapFileAccess {
        filename: string;
        flags: Flags;
        _success: (data: string) => void;
        _error: (error: any) => void;
        constructor(filename: string, flags: Flags);
        done(success: (data: string) => void): PhonegapFileAccess;
        fail(error: (error: any) => void): PhonegapFileAccess;
        tryAccess(): void;
        _onGotFileEntry(fileEntry: FileEntry): void;
        private tryGetFilesystem();
        _gotFileSystem(fileSystem: FileSystem): void;
        private onError(error);
    }
    class PhonegapFileReader extends PhonegapFileAccess {
        constructor(filename: string);
        read(): PhonegapFileReader;
        _onGotFileEntry(fileEntry: FileEntry): void;
        private gotFileEntry(fileEntry);
        gotFile(file: File): void;
    }
    class PhonegapFileWriter extends PhonegapFileAccess {
        append: boolean;
        private content;
        constructor(filename: string, append?: boolean);
        write(content: string): PhonegapFileWriter;
        _onGotFileEntry(fileEntry: FileEntry): void;
        private gotFileWriter(writer);
    }
}
declare module Coveo {
    class LoginPageSettings {
        loginPanel: Login;
        private pageSettings;
        private pageSettingsInputTemplate;
        constructor(loginPanel: Login);
        buildDom(): void;
        getPageSettingsUrl(): string;
        setPageSettingsUrl(pageUrl: string): void;
        submit(allValidationPassed: JQueryDeferred<boolean>): JQueryDeferred<{}>;
        validate(allValidationPassed: JQueryDeferred<boolean>): JQueryDeferred<{}>;
        private getLocalStorageKeyPageUrl();
        private getSearchApiRootUrl();
        private handleInputKeypress(e);
        private loadFromInterfaceEditorUrl(url);
        private tryToWriteFileToDisc(allValidationPassed, deferredToReturn, writeDocument?);
        private tryToReadFileFomDisc(allValidationPassed, deferredToReturn, writeDocument?);
        private writeDocumentContent(content);
        private appendMissingLoginComponentIfNeeded();
        private configureNewEndpoints();
        private initNewSearchInterface();
    }
}
declare module Coveo {
    interface LoginOptions {
        id?: string;
        caption?: string;
        autoTriggerQuery?: boolean;
        requireLogin?: boolean;
        requirePageSettings?: boolean;
    }
    class Login extends Component {
        element: HTMLElement;
        options: LoginOptions;
        static ID: string;
        static options: LoginOptions;
        pageSettings: LoginPageSettings;
        credentials: LoginCredentials;
        isHidden: boolean;
        container: JQuery;
        private loadingAnimation;
        private submitButton;
        private logo;
        private errorMessage;
        private caption;
        combined: JQuery;
        private errorMessageTemplate;
        private captionTemplate;
        private tabButtonTemplate;
        private containerTemplate;
        private submitButtonTemplate;
        private combinedTemplate;
        private logoTemplate;
        constructor(element: HTMLElement, options?: LoginOptions, bindings?: ComponentBindings, loginId?: string);
        getPageSettingsUrl(): string;
        setPageSettingsUrl(url: string): void;
        getUser(): string;
        setUser(user: string): void;
        getPassword(): string;
        setPassword(password: string): void;
        setErrorMessage(msg: string): void;
        resetErrorMessage(): void;
        createDom(): void;
        getOrCreateContainer(): JQuery;
        getOrCreateCombined(): JQuery;
        hide(): void;
        hideAndExecuteQuery(): void;
        validate(): void;
        submit(): void;
        isAccessDeniedError(error: EndpointError): boolean;
        private baseValidationEvent(methodToGather, onSuccess);
        private show();
        private handleBackButton();
        private handleQueryError(e, args);
        private updateEndpointWithCredentials();
        private buildTabButton();
    }
}
declare module Coveo {
    interface PagerOptions {
        numberOfPages?: number;
        enableNavigationButton?: boolean;
        maxNumberOfPages?: number;
    }
    class Pager extends Component {
        element: HTMLElement;
        options: PagerOptions;
        static ID: string;
        static options: PagerOptions;
        currentPage: number;
        private listenToQueryStateChange;
        private ignoreNextQuerySuccess;
        private needToReset;
        private list;
        private listItemTemplate;
        private listItemValueTemplate;
        private navigationButtonTemplate;
        constructor(element: HTMLElement, options?: PagerOptions, bindings?: ComponentBindings);
        setPage(pageNumber: number, analyticCause?: AnalyticsActionCause): void;
        previousPage(): void;
        nextPage(): void;
        private handleNewQuery(e, data);
        private updateQueryStateModel(attrValue);
        private handleQueryError(e, data);
        private handleQuerySuccess(e, data);
        private handleNoResults(e, data);
        private reset();
        private handleBuildingQuery(e, data);
        private computePagerBoundary(firstResult, totalCount);
        private renderNavigationButton(pagerBoundary, list);
        private handleQueryStateModelChanged(e, data);
        private handleClickPage(pageNumber);
        private handleClickPrevious();
        private handleClickNext();
        private fromFirstResultsToPageNumber(firstResult);
        private getFirstResultNumber(pageNumber?);
        private getQueryEventArgs();
    }
}
declare module Coveo {
    interface PipelineContextOptions {
    }
    class PipelineContext extends Component {
        element: HTMLElement;
        options: PipelineContextOptions;
        bindings: ComponentBindings;
        static ID: string;
        static CurrentUrl: string;
        private content;
        constructor(element: HTMLElement, options?: PipelineContextOptions, bindings?: ComponentBindings);
        private handleBuildingQuery(e, args);
        getContextKeys(): string[];
        getContextValue(key: string): string;
    }
}
declare module Coveo {
    interface PreferencePanelInputToBuild {
        label: string;
        placeholder?: string;
        tab?: string[];
        expression?: string;
        otherAttribute?: string;
    }
    class PreferencesPanelBoxInput {
        private boxInputToBuild;
        private nameOfInput;
        private type;
        inputs: {
            [label: string]: JQuery;
        };
        private inputTemplate;
        constructor(boxInputToBuild: PreferencePanelInputToBuild[], nameOfInput: string, type: string);
        build(): JQuery;
        select(toSelect: string): void;
        unselect(toUnselect: string): void;
        getSelected(): any;
        getSelecteds(): any[];
    }
    class PreferencesPanelRadioInput extends PreferencesPanelBoxInput {
        private radioElementToBuild;
        private name;
        constructor(radioElementToBuild: PreferencePanelInputToBuild[], name: string);
    }
    class PreferencesPanelCheckboxInput extends PreferencesPanelBoxInput {
        private checkboxElementToBuild;
        name: string;
        constructor(checkboxElementToBuild: PreferencePanelInputToBuild[], name: string);
        build(): JQuery;
    }
    class PreferencesPanelTextInput {
        textElementToBuild: PreferencePanelInputToBuild[];
        name: string;
        inputs: {
            [label: string]: JQuery;
        };
        inputTemplate: (...data: any[]) => string;
        constructor(textElementToBuild: PreferencePanelInputToBuild[], name: string);
        build(): JQuery;
        getValues(): any[];
        setValue(input: string, value: string): void;
        reset(): void;
        private getInput(input);
    }
    class PreferencesPanelTextAreaInput extends PreferencesPanelTextInput {
        inputTemplate: (...data: any[]) => string;
        build(): JQuery;
    }
    class PreferencePanelMultiSelectInput {
        private toBuild;
        options: string[];
        name: string;
        private textInput;
        private select;
        constructor(toBuild: PreferencePanelInputToBuild, options: string[], name: string);
        build(): JQuery;
        getValues(): any;
        setValues(values: string[]): void;
        reset(): void;
    }
}
declare module Coveo {
    interface PreferencesPanelOptions {
    }
    class PreferencesPanel extends Component {
        element: HTMLElement;
        options: PreferencesPanelOptions;
        static ID: string;
        static options: PreferencesPanelOptions;
        constructor(element: HTMLElement, options: PreferencesPanelOptions, bindings?: ComponentBindings);
        open(): void;
        close(): void;
        save(): void;
        closeWithoutSave(): void;
        private buildCloseButton();
        private buildTitle();
    }
}
declare module Coveo {
    interface PrintableUriOptions {
    }
    class PrintableUri extends Component {
        element: HTMLElement;
        options: PrintableUriOptions;
        result: QueryResult;
        static ID: string;
        static options: PrintableUriOptions;
        static fields: string[];
        private uri;
        constructor(element: HTMLElement, options: PrintableUriOptions, bindings?: ComponentBindings, result?: QueryResult);
        renderParentsXml(element: HTMLElement, parentsXml: string): void;
        renderUri(element: HTMLElement, result?: QueryResult): void;
        buildSeperator(): HTMLSpanElement;
        buildEllipsis(): HTMLSpanElement;
        buildHtmlToken(name: string, uri: string): HTMLAnchorElement;
        private bindLogOpenDocument(link);
    }
}
declare module Coveo {
    interface QueryboxOptions {
        enableSearchAsYouType?: boolean;
        searchAsYouTypeDelay?: number;
        enableQuerySyntax?: boolean;
        enableWildcards?: boolean;
        enableQuestionMarks?: boolean;
        enableLowercaseOperators?: boolean;
        enablePartialMatch?: boolean;
        partialMatchKeywords?: number;
        partialMatchThreshold?: string;
        autoFocus?: boolean;
        placeholder?: string;
        triggerQueryOnClear?: boolean;
    }
}
declare module Coveo {
    class Querybox extends Coveo.Component {
        element: HTMLElement;
        options: QueryboxOptions;
        static ID: string;
        static options: QueryboxOptions;
        magicBox: MagicBox.Instance;
        constructor(element: HTMLElement, options?: QueryboxOptions, bindings?: ComponentBindings);
        private handleBeforeRedirect();
        private handleBuildingQuery(e, data);
        private lastQuery;
        private triggerNewQuery(beforeExecuteQuery, searchAsYouType);
        private updateQueryState();
        private _handleQueryStateChanged(e, args);
        private searchAsYouTypeTimeout;
        private searchAsYouType();
        getResult(): MagicBox.Result;
        getDisplayedResult(): MagicBox.Result;
        getCursor(): number;
        resultAtCursor(match?: string | {
            (result: MagicBox.Result): boolean;
        }): MagicBox.Result[];
    }
}
declare module Coveo {
    interface QueryDurationOptions {
    }
    class QueryDuration extends Component {
        element: HTMLElement;
        options: QueryDurationOptions;
        static ID: string;
        static options: QueryDurationOptions;
        private textContainer;
        constructor(element: HTMLElement, options?: QueryDurationOptions, bindings?: ComponentBindings);
        private handleQuerySuccess(e, data);
        private formatQueryDuration(durationInMillis);
    }
}
declare module Coveo {
    interface QuerySummaryOptions {
        enableSearchTips?: boolean;
        onlyDisplaySearchTips?: boolean;
    }
    class QuerySummary extends Component {
        element: HTMLElement;
        options: QuerySummaryOptions;
        static ID: string;
        static options: QuerySummaryOptions;
        private textContainer;
        constructor(element: HTMLElement, options?: QuerySummaryOptions, bindings?: ComponentBindings);
        private handleQuerySuccess(e, data);
        private displayInfoOnNoResults();
    }
}
declare module Coveo {
    class DefaultResultAttachmentTemplate extends Template {
        constructor();
        instantiateToString(queryResult?: QueryResult): string;
    }
}
declare module Coveo {
    interface ResultAttachmentsOptions {
        resultTemplate?: Template;
        subResultTemplate?: Template;
        maximumAttachmentLevel?: number;
    }
    class ResultAttachments extends Component {
        element: HTMLElement;
        options: ResultAttachmentsOptions;
        bindings: ComponentBindings;
        attachmentLevel: number;
        static ID: string;
        static options: ResultAttachmentsOptions;
        private attachments;
        constructor(element: HTMLElement, options?: ResultAttachmentsOptions, bindings?: ComponentBindings, result?: QueryResult, attachmentLevel?: number);
        private renderAttachments();
        private attachmentHasSubAttachment(attachment);
        private autoCreateComponentsInsideResult(element, result);
    }
}
declare module Coveo {
    class DefaultFoldingTemplate extends Template {
        constructor();
        instantiateToString(queryResult?: QueryResult): string;
        getType(): string;
    }
}
declare module Coveo {
    interface ResultFoldingOptions {
        resultTemplate: Template;
        normalCaption: string;
        expandedCaption: string;
        moreCaption: string;
        lessCaption: string;
        oneResultCaption: string;
    }
    class ResultFolding extends Component {
        element: HTMLElement;
        options: ResultFoldingOptions;
        result: QueryResult;
        static ID: string;
        static options: ResultFoldingOptions;
        private normalCaption;
        private expandedCaption;
        private onlyOneMessageCaption;
        private results;
        private showMore;
        private showLess;
        private waitAnimation;
        private moreResultsDeferred;
        private showingMoreResults;
        constructor(element: HTMLElement, options?: ResultFoldingOptions, bindings?: ComponentBindings, result?: QueryResult);
        showMoreResults(): void;
        showLessResults(): void;
        private buildElements();
        private buildHeader();
        private buildResults();
        private buildFooter();
        private updateElementVisibility(subResultsLength?);
        private scrollToResultElement();
        private displayThoseResults(results);
        private renderChildResult(childResult);
        private autoCreateComponentsInsideResult(element, result);
        private cancelAnyPendingShowMore();
    }
}
declare module Coveo {
    interface ResultLinkOptions {
        onClick?: (e: JQueryEventObject, result: QueryResult) => any;
        field?: string;
        openInOutlook?: boolean;
        openQuickview?: boolean;
        alwaysOpenInNewWindow?: boolean;
    }
}
declare module Coveo.OSUtils {
    enum NAME {
        WINDOWS = 0,
        MACOSX = 1,
        UNIX = 2,
        LINUX = 3,
        UNKNOWN = 4,
    }
    function get(nav?: Navigator): any;
}
declare module Coveo {
    class ResultLink extends Component {
        element: HTMLElement;
        options: ResultLinkOptions;
        bindings: ResultsComponentBindings;
        result: QueryResult;
        os: OSUtils.NAME;
        static ID: string;
        static options: ResultLinkOptions;
        static fields: string[];
        constructor(element: HTMLElement, options?: ResultLinkOptions, bindings?: ResultsComponentBindings, result?: QueryResult, os?: OSUtils.NAME);
        protected bindEventToOpen(): boolean;
        private bindOnClickIfNotUndefined();
        private bindOpenQuickviewIfNotUndefined();
        private openLinkThatIsNotAnAnchor();
        private setHrefIfNotAlready();
        private bindPhonegapClick();
        private logOpenDocument;
        private getResultUri();
        private elementIsAnAnchor();
        private setField();
        private hasOutlookField();
        private isUriThatMustBeOpenedInQuickview();
    }
}
declare module Coveo {
    interface SalesforceResultLinkOptions extends ResultLinkOptions {
        openInPrimaryTab: boolean;
        openInSubTab: boolean;
    }
    class SalesforceResultLink extends ResultLink {
        element: HTMLElement;
        options: SalesforceResultLinkOptions;
        result: QueryResult;
        static ID: string;
        static options: SalesforceResultLinkOptions;
        constructor(element: HTMLElement, options?: SalesforceResultLinkOptions, bindings?: ResultsComponentBindings, result?: QueryResult);
        protected bindEventToOpen(): boolean;
    }
}
declare module Coveo {
    interface ResultFilterPreference {
        selected?: boolean;
        custom?: boolean;
        tab?: string[];
        caption: string;
        expression: string;
    }
    interface ResultsFiltersPreferencesOptions {
        filters?: {
            [caption: string]: {
                expression: string;
                tab?: string[];
            };
        };
        includeInBreadcrumb?: boolean;
        showAdvancedFilters?: boolean;
    }
    class ResultsFiltersPreferences extends Component {
        element: HTMLElement;
        options: ResultsFiltersPreferencesOptions;
        bindings: ComponentBindings;
        static ID: string;
        static options: ResultsFiltersPreferencesOptions;
        preferences: {
            [caption: string]: ResultFilterPreference;
        };
        private preferencePanelLocalStorage;
        private preferencePanel;
        private preferenceContainer;
        private preferencePanelCheckboxInput;
        private advancedFilters;
        private advancedFiltersBuilder;
        private advancedFiltersTextInputCaption;
        private advancedFiltersTextInputExpression;
        private advancedFiltersTabSelect;
        private advancedFilterFormValidate;
        constructor(element: HTMLElement, options: ResultsFiltersPreferencesOptions, bindings: ComponentBindings);
        createDom(): void;
        save(): void;
        exitWithoutSave(): void;
        private bindPreferencePanelEvent();
        private bindBreadcrumbEvent();
        private bindQueryEvent();
        private handleBuildingQuery(e, args);
        private handlePopulateBreadcrumb(e, args);
        private handleClearBreadcrumb(e, args);
        private buildTitle();
        private buildAdvancedFilters();
        private buildAdvancedFilterInput();
        private buildAdvancedFilterFormValidate();
        private getAdvancedFiltersTextInputToBuild();
        private getAllTabs();
        private getPreferencesBoxInputToBuild();
        private buildCheckboxesInput();
        private buildDeleteAdvancedFilter();
        private buildEditAdvancedFilter();
        private buildBreadcrumb(filter);
        private confirmDelete(filter, filterElement);
        private editElement(filter, filterElement);
        private populateEditSection(toPopulate?);
        private deleteFilterPreference(filter, filterElement);
        private openAdvancedFilterSectionOrSaveFilters();
        private validateAndSaveAdvancedFilter(e);
        private fromPreferencesToCheckboxInput();
        private fromCheckboxInputToPreferences();
        private getDormantFilters();
        private getActiveFilters();
        private getInactiveFilters();
        private getActiveTab();
        private filterIsInActiveTab(filter, tab);
        private getFilterElementByCaption(caption);
        private fromResultsFilterOptionToResultsPreferenceInterface(filters?);
        private mergeLocalPreferencesWithStaticPreferences();
        private fromFilterToAnalyticsEvent(filter, type);
    }
}
declare module Coveo {
    interface ResultsPreferencesOptions {
        enableOpenInOutlook?: boolean;
        enableOpenInNewWindow?: boolean;
    }
    class ResultsPreferences extends Component {
        element: HTMLElement;
        options: ResultsPreferencesOptions;
        bindings: ComponentBindings;
        static ID: string;
        static options: ResultsPreferencesOptions;
        preferences: ResultLinkOptions;
        private preferencePanelLocalStorage;
        private preferencePanel;
        private preferencePanelCheckboxInput;
        constructor(element: HTMLElement, options: ResultsPreferencesOptions, bindings: ComponentBindings);
        save(): void;
        exitWithoutSave(): void;
        private updateComponentOptionsModel();
        private buildTitle();
        private buildCheckboxesInput();
        private fromCheckboxInputToPreferences();
        private fromPreferencesToCheckboxInput();
        private fromPreferenceChangeEventToUsageAnalyticsLog(e);
    }
}
declare module Coveo {
    interface ResultTaggingOptions {
        field: string;
        suggestBoxSize?: number;
        autoCompleteTimer?: number;
    }
    interface AnalyticsResultTaggingMeta {
        facetId: string;
        facetValue?: string;
        facetTitle?: string;
    }
    class ResultTagging extends Component {
        element: HTMLElement;
        options: ResultTaggingOptions;
        result: QueryResult;
        os: OSUtils.NAME;
        static ID: string;
        static options: ResultTaggingOptions;
        static AUTO_COMPLETE_CLASS: string;
        private autoCompleteZone;
        private textBox;
        private autoCompletePopup;
        private tagZone;
        private tags;
        constructor(element: HTMLElement, options?: ResultTaggingOptions, bindings?: ComponentBindings, result?: QueryResult, os?: OSUtils.NAME);
        private buildExistingTags();
        private buildTagIcon();
        private focusOnTextBox();
        private buildTagValue(tagValue);
        private buildShortenedTagWithTitle(tagValue);
        private buildTextBox();
        private buildAddIcon();
        private buildClearIcon();
        private bindFacetEventOnValue(element, value);
        private clearPopup();
        private showPopup();
        private populateSuggestions();
        private manageAutocompleteAutoHide();
        /**
         Exclude tags that are already on the result (Since we can tag with the same value twice)
         **/
        private buildRegEx(searchTerm);
        private buildTermToExclude(term);
        private manageUpDownEnter(code);
        private computeNextIndex(code, selectableArray);
        private buildSelectableValue(lookupValue);
        private doRemoveTag(element, tagValue);
        private doAddTagWithValue(tagValue);
        private doAddSingleTagValue(tagValue);
        private doAddTag();
    }
}
declare module Coveo {
    interface SearchButtonOptions {
    }
    class SearchButton extends Component {
        element: HTMLElement;
        options: SearchButtonOptions;
        static ID: string;
        constructor(element: HTMLElement, options?: SearchButtonOptions, bindings?: ComponentBindings);
        private handleClick(e);
    }
}
declare module Coveo {
    class FieldAddon {
        omnibox: Omnibox;
        static Index: number;
        cache: {
            [hash: string]: JQueryPromise<string[]>;
        };
        constructor(omnibox: Omnibox);
        getSuggestion(): JQueryPromise<OmniboxSuggestion[]>;
        private getHash();
        private hashToString(hash);
        private hashValueToSuggestion(hash, promise);
        private fields;
        private getFields();
        private fieldNames(current);
        private fieldValues(field, current);
        private simpleFieldNames(current);
    }
}
declare module Coveo {
    class RevealQuerySuggestAddon {
        omnibox: Omnibox;
        static Index: number;
        static suggestiontHtmlTemplate: (...data: any[]) => string;
        private static suggestiontHtml(suggestion);
        private static isPartialMatch(suggestion);
        private cache;
        constructor(omnibox: Omnibox);
        private currentPromise;
        private waitingRequest;
        getSuggestion(): JQueryPromise<OmniboxSuggestion[]>;
        private getRevealQuerySuggest(text, deferred);
    }
}
declare module Coveo {
    class TopQueryAddon {
        omnibox: Omnibox;
        static Index: number;
        cache: {
            [hash: string]: JQueryPromise<OmniboxSuggestion[]>;
        };
        constructor(omnibox: Omnibox);
        getSuggestion(): JQueryPromise<OmniboxSuggestion[]>;
    }
}
declare module Coveo {
    class QueryExtensionAddon {
        omnibox: Omnibox;
        static Index: number;
        cache: {
            [hash: string]: JQueryPromise<string[]>;
        };
        constructor(omnibox: Omnibox);
        getSuggestion(): JQueryPromise<OmniboxSuggestion[]>;
        private getHash(magicBox);
        private hashToString(hash);
        private hashValueToSuggestion(hash, promise);
        private extensions;
        private getExtensions();
        private names(current);
        private attributeNames(name, current, used);
        hash(): void;
    }
}
declare module Coveo {
    class OldOmniboxAddon {
        omnibox: Omnibox;
        constructor(omnibox: Omnibox);
        private lastQuery;
        private lastSuggestions;
        getSuggestion(): JQueryPromise<OmniboxSuggestion[]>[];
        private getCurrentQueryExpression();
        private getRegexToSearch(strValue?);
        private getQueryExpressionBreakDown();
        private replace(searchValue, newValue);
        private clearCurrentExpression();
        private insertAt(at, toInsert);
        private replaceCurrentExpression(newValue);
        private buildPopulateOmniboxEventArgs();
        private rowsToSuggestions(rows);
    }
}
declare module Coveo {
    interface OmniboxSuggestion extends MagicBox.Suggestion {
    }
    interface OmniboxOptions extends QueryboxOptions {
        inline?: boolean;
        enableSearchAsYouType?: boolean;
        searchAsYouTypeDelay?: number;
        enableQuerySyntax?: boolean;
        enableWildcards?: boolean;
        enableQuestionMarks?: boolean;
        enableLowercaseOperators?: boolean;
        autoFocus?: boolean;
        enableFieldAddon?: boolean;
        enableSimpleFieldAddon?: boolean;
        listOfFields?: string[];
        fieldAlias?: {
            [alias: string]: string;
        };
        enableTopQueryAddon?: boolean;
        enableRevealQuerySuggestAddon?: boolean;
        enableQueryExtensionAddon?: boolean;
        omniboxTimeout?: number;
        placeholder?: string;
        grammar?: (grammar: {
            start: string;
            expressions: {
                [id: string]: MagicBox.ExpressionDef;
            };
        }) => {
            start: string;
            expressions: {
                [id: string]: MagicBox.ExpressionDef;
            };
        };
    }
    class Omnibox extends Component {
        element: HTMLElement;
        options: OmniboxOptions;
        static ID: string;
        static options: OmniboxOptions;
        magicBox: MagicBox.Instance;
        private partialQueries;
        private lastSugesstions;
        constructor(element: HTMLElement, options?: OmniboxOptions, bindings?: ComponentBindings);
        private setupMagicBox();
        private cleanCustomData(toClean, rejectLength?);
        private handleSuggestions();
        private handleBeforeRedirect();
        private handleBuildingQuery(e, data);
        private lastQuery;
        private triggerNewQuery(beforeExecuteQuery, searchAsYouType);
        private getQuery(searchAsYouType);
        updateQueryState(): void;
        private _handleQueryStateChanged(e, args);
        private handleQuerySuccess();
        private searchAsYouTypeTimeout;
        private searchAsYouType();
        getText(): string;
        setText(value: string): void;
        clear(): void;
        getResult(): MagicBox.Result;
        getDisplayedResult(): MagicBox.Result;
        getCursor(): number;
        resultAtCursor(match?: string | {
            (result: MagicBox.Result): boolean;
        }): MagicBox.Result[];
        open(): void;
    }
}
declare module Coveo {
    interface SuggestionForOmniboxOptionsOnSelect {
        (value: string, args: PopulateOmniboxEventArgs): void;
    }
    interface SuggestionForOmniboxOptions {
        omniboxZIndex?: number;
        headerTitle?: string;
        onSelect?: SuggestionForOmniboxOptionsOnSelect;
        numberOfSuggestions?: number;
    }
    interface SuggestionForOmniboxTemplate {
        header?: {
            template: (...args: any[]) => string;
            title: string;
        };
        row: (...args: any[]) => string;
    }
    interface SuggestionForOmniboxResult {
        value: string;
    }
    class SuggestionForOmnibox {
        structure: SuggestionForOmniboxTemplate;
        onSelect: (value: string, args: PopulateOmniboxEventArgs) => void;
        constructor(structure: SuggestionForOmniboxTemplate, onSelect: (value: string, args: PopulateOmniboxEventArgs) => void);
        buildOmniboxElement(results: SuggestionForOmniboxResult[], args: PopulateOmniboxEventArgs): JQuery;
        private buildElementHeader();
        private buildRowElements(results, args);
    }
}
declare module Coveo {
    interface OmniboxResultListOptions extends ResultListOptions {
        omniboxZIndex?: number;
        onSelect?: (result: QueryResult, resultElement: JQuery, omniboxObject: PopulateOmniboxEventArgs) => void;
        headerTitle?: string;
        queryOverride?: string;
    }
    class OmniboxResultList extends ResultList {
        element: HTMLElement;
        options: OmniboxResultListOptions;
        bindings: ComponentBindings;
        static ID: string;
        static options: OmniboxResultListOptions;
        private lastOmniboxRequest;
        private suggestionForOmnibox;
        constructor(element: HTMLElement, options?: OmniboxResultListOptions, bindings?: ComponentBindings);
        _buildResults(results: QueryResults): void;
        private setupOptions();
        private handlePopulateOmnibox(e, args);
        private handleQueryOverride(e, args);
        private onRowSelection(result, resultElement, omniboxObject);
    }
}
declare module Coveo {
    interface SettingsOptions {
        menuDelay: number;
    }
    class Settings extends Component {
        element: HTMLElement;
        options: SettingsOptions;
        static ID: string;
        static options: SettingsOptions;
        private menu;
        constructor(element: HTMLElement, options: SettingsOptions, bindings?: ComponentBindings);
        private closeTimeout;
        init(): void;
        private mouseleave();
        private mouseenter();
        private buildMenu();
        private getPopupPositioning();
    }
}
declare module Coveo {
    interface SettingsPopulateMenuArgs {
        settings: Settings;
        menuData: MenuItem[];
    }
    class SettingsEvents {
        static settingsPopulateMenu: string;
    }
}
declare module Coveo {
    interface ShareQueryOptions {
    }
    class ShareQuery extends Component {
        element: HTMLElement;
        options: ShareQueryOptions;
        static ID: string;
        static options: ShareQueryOptions;
        dialogBoxContent: JQuery;
        private linkToThisQuery;
        private completeQuery;
        constructor(element: HTMLElement, options: ShareQueryOptions, bindings?: ComponentBindings);
        open(): void;
        close(): void;
        private handleProcessNewQueryResults(e, data);
        private outputIfNotNull(value);
        private buildContent();
        private buildTextBoxWithLabel(label, input);
        static create(element: HTMLElement, options?: ShareQueryOptions, root?: HTMLElement): ShareQuery;
    }
}
declare module Coveo {
    interface SortOptions {
        sortCriteria?: SortCriteria[];
        caption?: string;
    }
    class Sort extends Component {
        element: HTMLElement;
        options: SortOptions;
        static ID: string;
        static options: SortOptions;
        private currentCriteria;
        constructor(element: HTMLElement, options?: SortOptions, bindings?: ComponentBindings);
        select(direction?: string, silent?: boolean): void;
        disable(): void;
        enable(): void;
        getCurrentCriteria(): SortCriteria;
        private handleQueryStateChanged(e, data);
        private update();
        private handleBuildingQuery(e, data);
        private handleQuerySuccess(e, data);
        private handleClick();
        private isToggle();
        private isSelected();
        private updateAppearance();
        match(sortId: string): boolean;
    }
}
declare module Coveo {
    interface StandaloneLoginOptions extends LoginOptions {
        requirePageSettings?: boolean;
        includeDemoSection?: boolean;
    }
    class StandaloneLogin extends Login {
        element: HTMLElement;
        options: StandaloneLoginOptions;
        static ID: string;
        private demoContainer;
        private newToCoveoSection;
        private demoCoveoSection;
        static options: StandaloneLoginOptions;
        constructor(element: HTMLElement, options?: StandaloneLoginOptions, bindings?: ComponentBindings);
        getOrCreateContainerForDemo(): JQuery;
        private buildAllDemo();
        private buildDemoSection();
        private buildNewToCoveoSection();
        private showDemoSection();
        private hideDemoSection();
    }
}
declare module Coveo {
    class StandaloneResult {
        searchInterface: SearchInterface;
        result: QueryResult;
        element: HTMLElement;
        constructor(searchInterface: SearchInterface, resultTemplate: Template, result: QueryResult);
        private initialize();
    }
}
declare module Coveo {
    class Cell {
        private value;
        private html;
        private previewActive;
        constructor(value?: any, html?: HTMLElement);
        getValue(): any;
        getHTML(): HTMLElement;
        setValue(value: any): void;
        setHTML(html: HTMLElement): void;
        addPreview(minWidth: string, maxWidth: string): void;
        removePreview(): void;
        updatePreview(template: string): void;
    }
}
declare module Coveo {
    class DefaultMatrixResultPreviewTemplate extends Template {
        private computedField;
        private format;
        constructor(computedField: string, format: string);
        instantiateToString(object?: QueryResult, checkCondition?: boolean): string;
        instantiateToElement(object?: QueryResult, checkCondition?: boolean): HTMLElement;
    }
}
declare module Coveo {
    interface MatrixOptions {
        title?: string;
        rowField: string;
        sortCriteria?: string;
        maximumNumberOfRows?: number;
        enableRowTotals?: boolean;
        columnField: string;
        columnFieldValues: string[];
        columnLabels: string[];
        columnHeader: string;
        maximumNumberOfValuesInGroupBy?: number;
        enableColumnTotals?: boolean;
        computedField: string;
        computedFieldOperation?: string;
        computedFieldFormat?: string;
        cellFontSize?: string;
        enableHoverPreview?: boolean;
        previewSortCriteria?: string;
        previewSortField?: string;
        previewMaxWidth?: string;
        previewMinWidth?: string;
        previewDelay?: number;
        previewTemplate?: Template;
    }
    class Matrix extends Component {
        element: HTMLElement;
        options: MatrixOptions;
        static ID: string;
        static options: MatrixOptions;
        data: Cell[][];
        groupByIndex: any[];
        rowId: string;
        columnId: string;
        selectedRowValue: any;
        selectedColumnValue: any;
        private numberOfRows;
        private numberOfColumns;
        private previewTimeout;
        constructor(element: HTMLElement, options?: MatrixOptions, bindings?: ComponentBindings);
        bindEvents(): void;
        private initQueryState();
        private buildMatrix();
        private buildTitle();
        private buildBody();
        private handleBuildingQuery(e, args);
        private handleDoneBuildingQuery(e, args);
        private addMainGroubByRequest(queryBuilder);
        private addColumnsGroupByRequests(queryBuilder);
        private buildExpression(queryBuilder);
        private getComputedFields();
        private handleDeferredQuerySuccess(e, args);
        private getCellResult(results, rowNumber, columnNumber);
        private addTotals();
        private addRowTotals();
        private addColumnTotals();
        private computeRowTotal(rowNumber);
        private computeColumnTotal(columnNumber);
        private formatCells();
        private addHeaderRow();
        private addRow();
        private addColumn(column?);
        private addCellToRow(rowNumber, columnNumber);
        private setValue(value, rowNumber, columnNumber);
        private getCell(rowNumber, columnNumber);
        private getCellValue(rowNumber, columnNumber);
        private handleClick(rowNumber, columnNumber);
        private getRowValue(rowNumber);
        private getColumnValue(columnNumber);
        private isAColumnSelected();
        private isColumnSelected(columnValue);
        private isARowSelected();
        private isRowSelected(rowValue);
        private isCellSelected(rowValue, columnValue);
        private areFacetsPresent();
        private isRowFacetPresent();
        private isColumnFacetPresent();
        private reset();
        private parseResults(results);
        drawMatrix(): void;
        private drawRow(row, rowNumber);
        private handleHoverIn(rowNumber, columnNumber);
        private handleHoverOut(rowNumber, columnNumber);
        private displayResultsPreview(rowNumber, columnNumber);
        private instanciateTemplate(result);
        private createPreviewQuery(rowNumber, columnNumber);
        private isHoverWorkingOnRow(rowNumber);
        private isHoverWorkingOnColumn(columnNumber);
        private isDataAvailable(row, column);
    }
}
declare module Coveo {
    interface TabGroupMenuOptions {
        menuDelay?: number;
    }
    class TabGroupMenu extends Component {
        options: TabGroupMenuOptions;
        static ID: string;
        static options: TabGroupMenuOptions;
        private menuItems;
        private activeMenuItem;
        private menuItemsContainer;
        private activeMenuItemDisplay;
        private menuIsOpen;
        private menuItemsContainerTemplate;
        private activeMenuItemTemplate;
        private activeMenuItemIconTemplate;
        private activeMenuItemCaptionTemplate;
        constructor(element: HTMLElement, options?: TabGroupMenuOptions, bindings?: ComponentBindings);
        open(): void;
        close(): void;
        private handleClick(e);
        private handleClickOnMenuItem(e);
        private handleClickOnMenu();
        private handleMouseLeave(e);
        private handleAfterInitialization();
        private handleQueryStateChange(e, args);
        private initMenuItems();
        private initQueryStateEvents();
        private initMiscEvents();
        private renderDisplayActiveMenuItem();
        private renderMenu();
        private selectMenuItem(menuItem);
        private getItemInMenuById(id);
        private getItemInMenuByElement(element);
        private getInactiveMenuItems();
        private getItemMenuClass();
        private getCorrectTarget(e);
        private targetIsAMenuItem(e);
    }
}
declare module Coveo {
    interface TabGroupOptions {
        id?: string;
        icon?: string;
        expression?: string;
    }
    class TabGroup extends Component {
        options: TabGroupOptions;
        static ID: string;
        static options: TabGroupOptions;
        private title;
        private isSelected;
        private iconTemplate;
        constructor(element: HTMLElement, options?: TabGroupOptions, bindings?: ComponentBindings);
        select(): void;
        getTitle(): string;
        getIcon(): string;
        getId(): string;
        private actionOnSelect();
        private actionOnUnSelect();
        private updateQueryStateModel();
        private initQueryEvents();
        private initQueryStateEvents();
        private handleBuildingQueryEvents(e, args, foo);
        private handleQueryStateChange(e, args);
        private hideTabsNotInThisGroup();
        private getAllVisibleTab();
        private getAllTabs();
        isElementIncludedInTabGroup(element: HTMLElement): boolean;
    }
}
declare module Coveo {
    interface TemplateLoaderOptions {
        template: Template;
        condition?: String;
    }
    class TemplateLoader extends Component {
        element: HTMLElement;
        options: TemplateLoaderOptions;
        bindings: ComponentBindings;
        result: QueryResult;
        static ID: string;
        static options: TemplateLoaderOptions;
        constructor(element: HTMLElement, options?: TemplateLoaderOptions, bindings?: ComponentBindings, result?: QueryResult);
        private initialize();
    }
}
declare module Coveo {
    interface ToggleButtonOptions {
        toggleClass?: string;
        target: string;
        activateGlass?: boolean;
    }
    class ToggleButton extends Component {
        element: HTMLElement;
        options: ToggleButtonOptions;
        static ID: string;
        static options: ToggleButtonOptions;
        private classToToggle;
        private target;
        private activateGlass;
        constructor(element: HTMLElement, options?: ToggleButtonOptions, bindings?: ComponentBindings);
        private handleClick();
        private handleTabChanged();
        private addToggleClass();
        private removeToggleClass();
        private getGlass();
        private buildGlass();
    }
}
declare module Coveo {
    interface AnalyticsSuggestionsOptions extends SuggestionForOmniboxOptions {
    }
    class AnalyticsSuggestions extends Coveo.Component {
        options: AnalyticsSuggestionsOptions;
        static ID: string;
        static options: AnalyticsSuggestionsOptions;
        private suggestionForOmnibox;
        private partialQueries;
        private lastSuggestions;
        private topAnalyticsElementHeaderTemplate;
        private topAnalyticsElementRowTemplate;
        constructor(element: HTMLElement, options: AnalyticsSuggestionsOptions, bindings?: ComponentBindings);
        private resultsToBuildWith;
        private handlePopulateOmnibox(e, args);
        private onRowSelection(value, args);
        private cleanCustomData(toClean, rejectLength?);
        private resolveWithUndefined(deferred);
    }
}
declare module Coveo {
    interface FieldSuggestionsOptions extends SuggestionForOmniboxOptions {
        field?: string;
        queryOverride?: string;
        omniboxDelay?: number;
    }
    class FieldSuggestions extends Coveo.Component {
        options: FieldSuggestionsOptions;
        static ID: string;
        static options: FieldSuggestionsOptions;
        private suggestionForOmnibox;
        private topFieldElementHeaderTemplate;
        private topFieldElementRowTemplate;
        constructor(element: HTMLElement, options: FieldSuggestionsOptions, bindings?: ComponentBindings);
        private lastDeferred;
        private lastTimeout;
        private handlePopulateOmnibox(e, args);
        private resolveWithUndefined(deferred);
        private onRowSelection(value, args);
        private buildListFieldValueRequest(valueToSearch);
    }
}
declare module Coveo {
    interface TriggersOptions {
    }
    class Triggers extends Component {
        element: HTMLElement;
        options: TriggersOptions;
        bindings: ComponentBindings;
        _window: Window;
        static ID: string;
        static options: TriggersOptions;
        constructor(element: HTMLElement, options?: TriggersOptions, bindings?: ComponentBindings, _window?: Window);
        private handleProcessNewQueryResults(e, data);
        private executeTriggers(Triggers, type, func, single?);
    }
}
declare module Coveo {
    interface ChatterPostedByOption {
        enablePostedOn: boolean;
        useFromInstead: boolean;
        openInPrimaryTab: boolean;
        openInSubTab: boolean;
    }
    class ChatterPostedBy extends Coveo.Component {
        element: HTMLElement;
        options: ChatterPostedByOption;
        bindings: ComponentBindings;
        result: QueryResult;
        static ID: string;
        static options: ChatterPostedByOption;
        static fields: string[];
        constructor(element: HTMLElement, options?: ChatterPostedByOption, bindings?: ComponentBindings, result?: QueryResult);
        private renderLink(text, id);
    }
}
declare module Coveo {
    interface ChatterLikedByOption {
        nbLikesToRender: number;
        openInPrimaryTab: boolean;
        openInSubTab: boolean;
    }
    class ChatterLikedBy extends Coveo.Component {
        element: HTMLElement;
        options: ChatterLikedByOption;
        bindings: ComponentBindings;
        result: QueryResult;
        static ID: string;
        static options: ChatterLikedByOption;
        static fields: string[];
        constructor(element: HTMLElement, options?: ChatterLikedByOption, bindings?: ComponentBindings, result?: QueryResult);
        private renderLikesList(element, result, likeNames, likeIds, nbLikesToRender);
        private renderLikeLink(result, likeName, likeId);
    }
}
declare module Coveo {
    interface ChatterTopicOption {
    }
    class ChatterTopic extends Coveo.Component {
        element: HTMLElement;
        options: ChatterTopicOption;
        bindings: ComponentBindings;
        result: QueryResult;
        static ID: string;
        static fields: string[];
        constructor(element: HTMLElement, options?: ChatterTopicOption, bindings?: ComponentBindings, result?: QueryResult);
    }
}
declare module Coveo {
    interface ChatterPostAttachmentOption {
    }
    class ChatterPostAttachment extends Coveo.Component {
        element: HTMLElement;
        options: ChatterPostAttachmentOption;
        bindings: ComponentBindings;
        result: QueryResult;
        static ID: string;
        static fields: string[];
        constructor(element: HTMLElement, options?: ChatterPostAttachmentOption, bindings?: ComponentBindings, result?: QueryResult);
    }
}
declare module Coveo {
    interface ThumbnailOptions {
        noThumbnailClass?: string;
        clickable?: boolean;
    }
    class Thumbnail extends Component {
        element: HTMLElement;
        options: ThumbnailOptions;
        bindings: ResultsComponentBindings;
        result: QueryResult;
        static ID: string;
        static options: ThumbnailOptions;
        static parent: typeof ResultLink;
        static fields: string[];
        constructor(element: HTMLElement, options?: ThumbnailOptions, bindings?: ResultsComponentBindings, result?: QueryResult);
        private buildThumbnailImage();
        private buildImageWithDirectSrcAttribute(endpoint);
        private buildImageWithBase64SrcAttribute(endpoint);
        private setEmptyThumbnailClass();
    }
}
declare module Coveo {
    interface YouTubeThumbnailOptions {
        width: string;
        height: string;
        embed: boolean;
    }
    class YouTubeThumbnail extends Component {
        element: HTMLElement;
        options: YouTubeThumbnailOptions;
        bindings: ResultsComponentBindings;
        result: QueryResult;
        static ID: string;
        static options: YouTubeThumbnailOptions;
        static fields: string[];
        private modalbox;
        constructor(element: HTMLElement, options?: YouTubeThumbnailOptions, bindings?: ResultsComponentBindings, result?: QueryResult);
        private handleOnClick();
        private extractVideoId();
    }
}
declare module Coveo {
    enum RatingValues {
        Undefined = 0,
        Lowest = 1,
        Low = 2,
        Average = 3,
        Good = 4,
        Best = 5,
    }
    interface ResultRatingOptions {
    }
    class ResultRating extends Coveo.Component {
        element: HTMLElement;
        options: ResultRatingOptions;
        bindings: ComponentBindings;
        result: QueryResult;
        static ID: string;
        constructor(element: HTMLElement, options?: ResultRatingOptions, bindings?: ComponentBindings, result?: QueryResult);
        private renderComponent(element, rating);
        private renderStars(element, isChecked, value);
        rateDocument(rating: RatingValues): void;
    }
}
declare module Coveo {
    interface TextOptions {
        value?: string;
        size?: string;
        style?: string;
        weight?: string;
        textAlign?: string;
        marginTop?: string;
        marginBottom?: string;
        marginLeft?: string;
        marginRight?: string;
        paddingTop?: string;
        paddingBottom?: string;
        paddingLeft?: string;
        paddingRight?: string;
    }
    class Text extends Component {
        element: HTMLElement;
        options: TextOptions;
        static ID: string;
        static options: TextOptions;
        constructor(element: HTMLElement, options?: TextOptions, bindings?: ComponentBindings);
    }
}
declare var userActionsHandler: Coveo.UserActionsHandler;
declare module Coveo {
    interface UserActionsOptions {
        filters?: string[];
        showButton?: boolean;
        enableBindOnBox?: boolean;
    }
    interface APIAnalyticsEvent {
        type: string;
        dateTime: number;
        eventMetadata: any;
    }
    interface APIAnalyticsSession {
        events: APIAnalyticsEvent[];
        numberOfEvents: number;
        visitId: string;
    }
    interface APIAnalyticsVisitResponse {
        visits: APIAnalyticsSession[];
        totalNumberOfVisits: number;
        message?: string;
        type?: string;
    }
    interface UserActionsHandler {
        getDataFromUA: (callback: any) => any;
    }
    class UserActions extends Component {
        element: HTMLElement;
        options: UserActionsOptions;
        bindings: ComponentBindings;
        static ID: string;
        static DEFAULT_FILTERS: string[];
        static options: UserActionsOptions;
        private eventListBox;
        private loadingBox;
        private handler;
        constructor(element: HTMLElement, options?: UserActionsOptions, bindings?: ComponentBindings);
        setHandler(handler: UserActionsHandler): void;
        setFilters(filters: string[]): void;
        private render();
        open(): void;
        toggle(): void;
        close(): void;
        private renderEvents(visits);
        private renderEvent(event);
        private renderField(fieldTitle, fieldValue);
        private renderLinkField(fieldTitle, fieldValue, fieldLink);
        private renderHeaderBox(session);
        private renderButton();
    }
}
declare module Coveo {
    interface AttachToCaseOptions {
        displayText?: boolean;
        readonly?: boolean;
    }
    interface ResultToAttach {
        uriHash: string;
        resultUrl: string;
        source: string;
        title: string;
        name: string;
        customs: any;
        knowledgeArticleId: string;
        articleLanguage: string;
        articleVersionNumber: string;
    }
    interface AttachToCaseStateChangedArg {
        target: HTMLElement;
        urihash: string;
        loading: boolean;
    }
    interface AttachToCaseCallbackArg {
        succeeded: boolean;
        message: string;
    }
    interface AttachToCaseDataArg {
        succeeded: boolean;
        message: string;
        attachedResults: string[];
    }
    interface AttachToCaseEndpoint {
        attachToCase: (dataToAttach: ResultToAttach, callback: (arg: AttachToCaseCallbackArg) => void) => boolean;
        detachFromCase: (uriHash: string, sfkbid: string, callback: (arg: AttachToCaseCallbackArg) => void) => boolean;
        data: AttachToCaseDataArg;
        caseId: string;
    }
    class AttachToCase extends Component {
        element: HTMLElement;
        options: AttachToCaseOptions;
        bindings: ComponentBindings;
        result: QueryResult;
        static ID: string;
        static options: AttachToCaseOptions;
        protected buttonElement: JQuery;
        protected textElement: JQuery;
        protected attachToCaseEndpoint: AttachToCaseEndpoint;
        protected attachedResults: string[];
        protected attached: boolean;
        protected loading: boolean;
        protected initialized: boolean;
        constructor(element: HTMLElement, options?: AttachToCaseOptions, bindings?: ComponentBindings, result?: QueryResult);
        private initialize();
        attach(): void;
        detach(): boolean;
        setAttachToCaseEndpoint(endpoint: AttachToCaseEndpoint): void;
        isAttached(): boolean;
        protected handleClick(): void;
        private handleData(arg);
        private handleAttachCallback(arg);
        private handleDetachCallback(arg);
        private handleStateChanged(arg);
        protected renderButton(): void;
        protected handleHover(isIn: boolean): void;
        protected sendStateChangedEvent(): void;
        protected updateButton(sendEvent?: boolean): void;
    }
}
declare module Coveo {
    class AttachedResultsTab extends Tab {
        element: HTMLElement;
        options: TabOptions;
        static ID: string;
        private attachToCaseEndpoint;
        constructor(element: HTMLElement, options?: TabOptions, bindings?: ComponentBindings);
        setAttachToCaseEndpoint(endpoint: AttachToCaseEndpoint): void;
        private handleBuildingQueryForAttachedResults(e, data);
        private getExpressions();
    }
}
declare module Coveo {
    interface SearchboxOptions extends OmniboxOptions {
        addSearchButton?: boolean;
        enableOmnibox?: boolean;
    }
    class Searchbox extends Coveo.Component {
        element: HTMLElement;
        options: SearchboxOptions;
        static ID: string;
        static parent: typeof Omnibox;
        static options: OmniboxOptions;
        searchButton: SearchButton;
        searchbox: Querybox | Omnibox;
        constructor(element: HTMLElement, options?: SearchboxOptions, bindings?: ComponentBindings);
    }
}
declare module Coveo {
    interface ExportToExcelOptions {
        numberOfResults?: number;
    }
    class ExportToExcel extends Component {
        element: HTMLElement;
        options: ExportToExcelOptions;
        bindings: ComponentBindings;
        _window: Window;
        static ID: string;
        static options: ExportToExcelOptions;
        constructor(element: HTMLElement, options: ExportToExcelOptions, bindings?: ComponentBindings, _window?: Window);
        open(): void;
        static create(element: HTMLElement, options?: ExportToExcelOptions, root?: HTMLElement): ExportToExcel;
    }
}
declare module Coveo {
    interface FollowItemOptions {
        watchedFields?: string[];
        modifiedDateField?: string;
    }
    class FollowItem extends Component {
        element: HTMLElement;
        options: FollowItemOptions;
        bindings: ResultsComponentBindings;
        result: QueryResult;
        static ID: string;
        static fields: string[];
        static options: FollowItemOptions;
        private container;
        private text;
        private subscription;
        constructor(element: HTMLElement, options?: FollowItemOptions, bindings?: ResultsComponentBindings, result?: QueryResult);
        private updateIsFollowed();
        setFollowed(subscription: Subscription): void;
        setNotFollowed(): void;
        private toggleFollow();
        private handleSubscriptionDeleted(e, args);
        private handleSubscriptionCreated(e, args);
        private remove();
        private getId();
        private static buildFollowRequest(id, title, options);
    }
}
declare module Coveo {
    interface SearchAlertsOptions {
        enableManagePanel?: boolean;
        enableFollowQuery?: boolean;
        modifiedDateField?: string;
        enableMessage?: boolean;
        messageCloseDelay?: number;
    }
    class SearchAlerts extends Component {
        element: HTMLElement;
        options: SearchAlertsOptions;
        static ID: string;
        static options: SearchAlertsOptions;
        private modal;
        constructor(element: HTMLElement, options: SearchAlertsOptions, bindings?: ComponentBindings);
        openPanel(): void;
        private handleSearchAlerts_Fail();
        private close();
        private addSearchAlert(subscription, container);
        private updateAndSyncSearchAlert(subscription);
        followQuery(): void;
        findQueryBoxDom(): HTMLElement;
        private static buildFollowQueryRequest(query, options);
        static create(element: HTMLElement, options?: SearchAlertsOptions, root?: HTMLElement): SearchAlerts;
    }
}
declare module "coveo-search-ui" {
  export = Coveo;
}