## Basic Usage

SalesforceCommunityResultLink will change clickable URI logic to open Salesforce content (Knowledge, Chatter & Case) in Salesforce Lightning Community

```
https://mycommunity.company.com/s/article/article-url-name
https://mycommunity.company.com/s/case/5002000000D8cuI
https://mycommunity.company.com/s/feed/5003000000D8cuI

```

This component inherits from the ResultLink component.

Most of the options available for a ResultLink component are also available for a SalesforceCommunityResultLink component.

Here is the list of ResultLink options which the SalesforceCommunityResultLink component does not support.

- Field
- hrefTemplate

## Options

### openInCommunity (optional) : _boolean_

Specifies if link should open in Salesforce Lightning Community

Default value is the boolean `true`.

Example: `data-open-in-community='true'`

### host (optional) : \_string

Specifies the host of the Salesforce Lightning Community.

Default value is the string `window.location.hostname`.

Example: `data-host='community.company.com'`
