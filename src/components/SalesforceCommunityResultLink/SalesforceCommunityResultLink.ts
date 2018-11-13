import { IResultLinkOptions, ResultLink, Initialization, ComponentOptions, IResultsComponentBindings, IQueryResult } from 'coveo-search-ui';

export interface ISalesforceCommunityResultLinkOptions extends IResultLinkOptions {
  openInCommunity: boolean;
  host: string;
}

export class SalesforceCommunityResultLink extends ResultLink {
  static ID = 'SalesforceCommunityResultLink';
  static options: ISalesforceCommunityResultLinkOptions = {
    /**
     * Specifies if link should open in Salesforce Ligthning community.
     *
     * Default value is the boolean `true`.
     */
    openInCommunity: ComponentOptions.buildBooleanOption({ defaultValue: true }),

    /**
     * Specifies what is the host of the Salesforce Ligthning community.
     *
     * Default value is the string `window.location.hostname`.
     */
    host: ComponentOptions.buildStringOption({ defaultValue: window.location.hostname })
  };
  constructor(
    public element: HTMLElement,
    public options: ISalesforceCommunityResultLinkOptions,
    public bindings: IResultsComponentBindings,
    public result: IQueryResult
  ) {
    super(element, ComponentOptions.initComponentOptions(element, SalesforceCommunityResultLink, options), bindings, result);
  }

  protected bindEventToOpen() {
    if (this.options.openInCommunity) {
      this.setCommunityUri();
    }

    return super.bindEventToOpen();
  }

  private setCommunityUri() {
    const communityName = window.location.pathname.replace(/\/(.*)\/s\/(.*)/i, '$1');
    var host = this.options.host;
    if (communityName != window.location.pathname) {
      host = host + '/' + communityName;
    }
    if (this.result.raw.objecttype == 'Case') {
      this.result.clickUri = '//' + host + '/s/case/' + this.result.raw.sfcaseid;
    } else if (this.result.raw.objecttype == 'FeedItem') {
      this.result.clickUri = '//' + host + '/s/feed/' + this.result.raw.sfid;
    } else if (this.result.raw.objecttype == 'CollaborationGroup') {
      this.result.clickUri = '//' + host + '/s/group/' + this.result.raw.sfid;
    } else if (this.result.raw.objecttype == 'ContentVersion') {
      this.result.clickUri = '//' + host + '/s/contentdocument/' + this.result.raw.sfcontentdocumentid;
    } else if (this.result.raw.sfkbid) {
      this.result.clickUri = '//' + host + '/s/article/' + this.result.raw.sfurlname;
    }
  }
}
SalesforceCommunityResultLink.options = _.extend({}, ResultLink.options, SalesforceCommunityResultLink.options);
Initialization.registerAutoCreateComponent(SalesforceCommunityResultLink);
