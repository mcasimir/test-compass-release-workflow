# Change Log

## [v1.16.0](https://github.com/mongodb-js/vscode/releases/tag/v1.16.0) - 2026-03-28

## What's Changed
* feat: add skills VSCODE-766 by @nirinchev in https://github.com/mongodb-js/vscode/pull/1278
* fix(playgrounds): serialize error so it is shown VSCODE-769 by @Anemy in https://github.com/mongodb-js/vscode/pull/1289
* fix(data-browsing): show error when cannot deserialize EJSON VSCODE-768 by @Anemy in https://github.com/mongodb-js/vscode/pull/1292


**Full Changelog**: https://github.com/mongodb-js/vscode/compare/v1.15.1...v1.16.0


## [v1.15.1](https://github.com/mongodb-js/vscode/releases/tag/v1.15.1) - 2026-03-09

## What's Changed
* fix: hide the total count rather than displaying N/A VSCODE-765 by @lerouxb in https://github.com/mongodb-js/vscode/pull/1276


**Full Changelog**: https://github.com/mongodb-js/vscode/compare/v1.15.0...v1.15.1


## [v1.15.0](https://github.com/mongodb-js/vscode/releases/tag/v1.15.0) - 2026-03-09

## What's Changed

* a new data browser for viewing documents in a collection
 - list controls 
 - change sort order
 - change the number per page
 - paginate through results
 - insert document
 - delete documents
 - per document controls
 - copy to clipboard
 - edit document
 - clone document
 - delete document
* open playground cursor results in the new data browser with most of the same new list controls
* better document titles
* the default document format is now shell syntax (matching playgrounds, mongosh, compass, etc.)

**Full Changelog**: https://github.com/mongodb-js/vscode/compare/v1.14.6...v1.15.0


## [v1.14.6](https://github.com/mongodb-js/vscode/releases/tag/v1.14.6) - 2026-01-15

## What's Changed

**Full Changelog**: https://github.com/mongodb-js/vscode/compare/v1.14.5...v1.14.6


## [v1.14.5](https://github.com/mongodb-js/vscode/releases/tag/v1.14.5) - 2026-01-15


**Full Changelog**: https://github.com/mongodb-js/vscode/compare/v1.14.4...v1.14.5


## [v1.14.4](https://github.com/mongodb-js/vscode/releases/tag/v1.14.4) - 2026-01-15

## What's Changed
* fix: remove copilot command from command palette VSCODE-718 by @Anemy in https://github.com/mongodb-js/vscode/pull/1204
* fix(settings): update shell and OIDC browser settings to be application scope VSCODE-726 by @Anemy in https://github.com/mongodb-js/vscode/pull/1211
* fix: update feedback forum links VSCODE-716 by @Anemy in https://github.com/mongodb-js/vscode/pull/1212

**Full Changelog**: https://github.com/mongodb-js/vscode/compare/v1.14.3...v1.14.4


## [v1.14.3](https://github.com/mongodb-js/vscode/releases/tag/v1.14.3) - 2025-12-09

## What's Changed
* chore: Prompt user to connect when running a playground VSCODE-686 by @tculig in https://github.com/mongodb-js/vscode/pull/1185

## New Contributors
* @dlemstra made their first contribution in https://github.com/mongodb-js/vscode/pull/1158
* @tculig made their first contribution in https://github.com/mongodb-js/vscode/pull/1169

**Full Changelog**: https://github.com/mongodb-js/vscode/compare/v1.14.2...v1.14.3


## [v1.14.2](https://github.com/mongodb-js/vscode/releases/tag/v1.14.2) - 2025-10-07

## What's Changed
* fix: snyk will now scan vscode project by @himanshusinghs in https://github.com/mongodb-js/vscode/pull/1136
* chore: update CHANGELOG.md by @mongodb-devtools-bot[bot] in https://github.com/mongodb-js/vscode/pull/1148
* chore: update mongodb-mcp-server to fix yargs-parser problem by @himanshusinghs in https://github.com/mongodb-js/vscode/pull/1153
* chore: disable snyk vuln ticket generation by @himanshusinghs in https://github.com/mongodb-js/vscode/pull/1154


**Full Changelog**: https://github.com/mongodb-js/vscode/compare/v1.14.1...v1.14.2


## [v1.14.1](https://github.com/mongodb-js/vscode/releases/tag/v1.14.1) - 2025-10-06

## What's Changed
* chore: update CHANGELOG.md by @mongodb-devtools-bot[bot] in https://github.com/mongodb-js/vscode/pull/1121
* fix: add hosting_mode to mcp telemetry by @nirinchev in https://github.com/mongodb-js/vscode/pull/1134
* chore: update mongosh by @gagik in https://github.com/mongodb-js/vscode/pull/1130
* chore(deps-dev): bump mongodb-runner from 5.9.2 to 5.10.0 by @dependabot[bot] in https://github.com/mongodb-js/vscode/pull/1139
* chore(deps-dev): bump @mongodb-js/signing-utils from 0.4.0 to 0.4.3 by @dependabot[bot] in https://github.com/mongodb-js/vscode/pull/1141
* chore(deps-dev): bump @mongodb-js/oidc-mock-provider from 0.11.3 to 0.11.4 by @dependabot[bot] in https://github.com/mongodb-js/vscode/pull/1140
* fix: disable MCP auto start and instead request on first load and new connection attempts VSCODE-704 by @himanshusinghs in https://github.com/mongodb-js/vscode/pull/1132
* chore(deps): bump mongodb from 6.19.0 to 6.20.0 in the driver group by @dependabot[bot] in https://github.com/mongodb-js/vscode/pull/1142
* chore(deps): bump @mongodb-js/mongodb-ts-autocomplete from 0.4.7 to 0.4.8 by @dependabot[bot] in https://github.com/mongodb-js/vscode/pull/1143
* chore(deps): bump @mongodb-js/connection-info from 0.17.1 to 0.21.0 by @dependabot[bot] in https://github.com/mongodb-js/vscode/pull/1138
* chore: bump mongodb-mcp-server to 1.0.2 by @himanshusinghs in https://github.com/mongodb-js/vscode/pull/1146


**Full Changelog**: https://github.com/mongodb-js/vscode/compare/v1.14.0...v1.14.1


## [v1.14.0](https://github.com/mongodb-js/vscode/releases/tag/v1.14.0) - 2025-09-16

## What's Changed
* chore: pin tests to run against 1.103.3 by @himanshusinghs in https://github.com/mongodb-js/vscode/pull/1118
* feat: integrate MongoDB MCP server with VSCode extension MCP-129 by @himanshusinghs in https://github.com/mongodb-js/vscode/pull/1115
* chore: fix for publish workflow asking npm cache by @himanshusinghs in https://github.com/mongodb-js/vscode/pull/1122
* chore: update CHANGELOG.md by @mongodb-devtools-bot[bot] in https://github.com/mongodb-js/vscode/pull/1068
* chore(deps): bump the compass group with 2 updates by @dependabot[bot] in https://github.com/mongodb-js/vscode/pull/1073
* chore: add codeowners VSCODE-687 by @nirinchev in https://github.com/mongodb-js/vscode/pull/1074
* chore(deps): bump the compass group with 4 updates by @dependabot[bot] in https://github.com/mongodb-js/vscode/pull/1075
* chore(deps-dev): bump mongodb-download-url from 1.5.7 to 1.6.0 by @dependabot[bot] in https://github.com/mongodb-js/vscode/pull/1076
* chore(deps-dev): bump mongodb-runner from 5.8.3 to 5.9.0 by @dependabot[bot] in https://github.com/mongodb-js/vscode/pull/1077
* chore(deps-dev): bump @mongodb-js/oidc-mock-provider from 0.10.3 to 0.11.0 by @dependabot[bot] in https://github.com/mongodb-js/vscode/pull/1078
* chore(deps): bump @mongodb-js/devtools-connect from 3.7.2 to 3.8.0 by @dependabot[bot] in https://github.com/mongodb-js/vscode/pull/1079
* chore(deps): bump @mongodb-js/device-id from 0.2.1 to 0.3.0 by @dependabot[bot] in https://github.com/mongodb-js/vscode/pull/1081
* chore(deps-dev): bump @mongodb-js/signing-utils from 0.3.9 to 0.4.0 by @dependabot[bot] in https://github.com/mongodb-js/vscode/pull/1082
* chore(deps): bump @mongodb-js/shell-bson-parser from 1.2.2 to 1.3.0 by @dependabot[bot] in https://github.com/mongodb-js/vscode/pull/1083
* chore(deps): bump mongodb-cloud-info from 2.1.7 to 2.2.0 by @dependabot[bot] in https://github.com/mongodb-js/vscode/pull/1084
* chore(deps-dev): bump @mongodb-js/sbom-tools from 0.7.4 to 0.8.1 by @dependabot[bot] in https://github.com/mongodb-js/vscode/pull/1088
* chore(deps-dev): bump @mongodb-js/oidc-plugin from 1.1.7 to 1.1.8 by @dependabot[bot] in https://github.com/mongodb-js/vscode/pull/1086
* chore(deps): bump the compass group with 6 updates by @dependabot[bot] in https://github.com/mongodb-js/vscode/pull/1085
* chore(deps): bump mongodb-query-parser from 4.3.2 to 4.4.0 by @dependabot[bot] in https://github.com/mongodb-js/vscode/pull/1080
* chore(deps): bump @mongodb-js/devtools-connect from 3.8.0 to 3.9.1 by @dependabot[bot] in https://github.com/mongodb-js/vscode/pull/1100
* chore(deps): bump the mongosh group across 1 directory with 13 updates by @dependabot[bot] in https://github.com/mongodb-js/vscode/pull/1103
* chore(deps-dev): bump mongodb-download-url from 1.6.0 to 1.6.2 by @dependabot[bot] in https://github.com/mongodb-js/vscode/pull/1102
* chore(deps): bump mongodb from 6.17.0 to 6.18.0 in the driver group by @dependabot[bot] in https://github.com/mongodb-js/vscode/pull/1104
* chore(deps-dev): bump @mongodb-js/mongodb-downloader from 0.4.0 to 0.4.2 by @dependabot[bot] in https://github.com/mongodb-js/vscode/pull/1096


**Full Changelog**: https://github.com/mongodb-js/vscode/compare/v1.13.3...v1.14.0


## [v1.13.3](https://github.com/mongodb-js/vscode/releases/tag/v1.13.3) - 2025-06-09

## What's Changed
* chore: allow opting out of the welcome screen. This is mostly useful when including the extension in a preconfigured environment (e.g. Github Codespaces) where displaying the welcome screen is undesirable. VSCODE-697 by @nirinchev in https://github.com/mongodb-js/vscode/pull/1053

**Full Changelog**: https://github.com/mongodb-js/vscode/compare/v1.13.2...v1.13.3


## [v1.13.2](https://github.com/mongodb-js/vscode/releases/tag/v1.13.2) - 2025-05-07

* chore(deps): bump the compass group with 3 updates by @dependabot in https://github.com/mongodb-js/vscode/pull/1035
* chore(deps): bump @mongodb-js/connection-info from 0.11.9 to 0.12.0 by @dependabot in https://github.com/mongodb-js/vscode/pull/1039
* chore: move device_id to common properties by @gagik in https://github.com/mongodb-js/vscode/pull/1038


**Full Changelog**: https://github.com/mongodb-js/vscode/compare/v1.13.1...v1.13.2


## [v1.13.1](https://github.com/mongodb-js/vscode/releases/tag/v1.13.1) - 2025-05-06

## What's Changed
* chore(deps): bump mongodb-schema from 12.5.2 to 12.6.2 by @dependabot in https://github.com/mongodb-js/vscode/pull/1006
* chore(deps): bump the compass group with 6 updates by @dependabot in https://github.com/mongodb-js/vscode/pull/1007
* chore(deps): bump the mongosh group with 10 updates by @dependabot in https://github.com/mongodb-js/vscode/pull/1009
* chore(deps-dev): bump @mongodb-js/oidc-plugin from 1.1.6 to 1.1.7 by @dependabot in https://github.com/mongodb-js/vscode/pull/1032
* chore(deps): bump the mongosh group with 7 updates by @dependabot in https://github.com/mongodb-js/vscode/pull/1033

**Full Changelog**: https://github.com/mongodb-js/vscode/compare/v1.13.0...v1.13.1


## [v1.13.0](https://github.com/mongodb-js/vscode/releases/tag/v1.13.0) - 2025-04-04

## What's Changed
* chore(telemetry): append user anonymousId & connectionId to appName passed to server COMPASS-8591 by @gagik in https://github.com/mongodb-js/vscode/pull/982
* feat: handle deep links to commands VSCODE-683 VSCODE-684 VSCODE-685 by @nirinchev in https://github.com/mongodb-js/vscode/pull/995

**Full Changelog**: https://github.com/mongodb-js/vscode/compare/v1.12.1...v1.13.0


## [v1.12.1](https://github.com/mongodb-js/vscode/releases/tag/v1.12.1) - 2025-03-07

## What's Changed
* chore(deps): bump remaining driver, shell, compass deps VSCODE-680 by @addaleax in https://github.com/mongodb-js/vscode/pull/981
* fix: hide preset connections from the Remove Connection command VSCODE-674 by @gagik in https://github.com/mongodb-js/vscode/pull/969

**Full Changelog**: https://github.com/mongodb-js/vscode/compare/v1.12.0...v1.12.1


## [v1.12.0](https://github.com/mongodb-js/vscode/releases/tag/v1.12.0) - 2025-01-30

## What's Changed
* feat(tree-explorer): add ability to set preset connections in settings.json VSCODE-665 by @gagik in https://github.com/mongodb-js/vscode/pull/909
* feat(participant): add disambiguation examples to answer MongoDB queries in Copilot by @GaurabAryal in https://github.com/mongodb-js/vscode/pull/911
* fix(playground): fix playground error when returning a function declaration VSCODE-669 by @nirinchev in https://github.com/mongodb-js/vscode/pull/925

**Full Changelog**: https://github.com/mongodb-js/vscode/compare/v1.11.0...v1.12.0


## [v1.11.0](https://github.com/mongodb-js/vscode/releases/tag/v1.11.0) - 2024-12-11

## What's Changed
* feat(playground): add Generate Query with Copilot code lens in playgrounds VSCODE-650 by @gagik in https://github.com/mongodb-js/vscode/pull/881
* feat(copilot): optimize namespace for export to playground VSCODE-654 by @alenakhineika in https://github.com/mongodb-js/vscode/pull/887
* feat(tree-explorer): add buttons to ask Copilot and create playgrounds from tree view VSCODE-651 by @gagik in https://github.com/mongodb-js/vscode/pull/890
* feat(participant): filter message history when it goes over maxInputTokens VSCODE-653 by @gagik in https://github.com/mongodb-js/vscode/pull/894
* feat(participant): remove in-app notification for participant VSCODE-662 by @gagik in https://github.com/mongodb-js/vscode/pull/899
* fix(connect): can not select files on the connection form VSCODE-658 by @alenakhineika in https://github.com/mongodb-js/vscode/pull/898


**Full Changelog**: https://github.com/mongodb-js/vscode/compare/v1.10.0...v1.11.0


## [v1.10.0](https://github.com/mongodb-js/vscode/releases/tag/v1.10.0) - 2024-11-25

## What's Changed
* feat(participant): export to a playground VSCODE-574 by @alenakhineika in https://github.com/mongodb-js/vscode/pull/832
* fix: filter long and invalid prompts in future messages VSCODE-614 by @gagik in https://github.com/mongodb-js/vscode/pull/861
* feat(participant): use onChatParticipant for the activation event VSCODE-630 by @gagik in https://github.com/mongodb-js/vscode/pull/869
* feat(chat): automatically pick the database & collection if there exists only one VSCODE-610 by @gagik in https://github.com/mongodb-js/vscode/pull/863
* chore: add analytics url params to README VSCODE-637 by @Anemy in https://github.com/mongodb-js/vscode/pull/868
* feat(chat): show errors if there are issues when getting databases & collections to pick VSCODE-610 by @gagik in https://github.com/mongodb-js/vscode/pull/864
* feat(chat): filter namespace messages from history if it exists in metadata VSCODE-611 by @gagik in https://github.com/mongodb-js/vscode/pull/866
* feat(chat): prompt to connect when a disconnected user tries to run code from participant VSCODE-618 by @gagik in https://github.com/mongodb-js/vscode/pull/872
* feat(chat): include history from messages to docs chatbot VSCODE-632 by @gagik in https://github.com/mongodb-js/vscode/pull/871
* feat(chat): update schema assistant prompt to handle empty and short prompts better VSCODE-648 by @gagik in https://github.com/mongodb-js/vscode/pull/874
* feat(copilot): export to Language with Copilot VSCODE-573 by @alenakhineika in https://github.com/mongodb-js/vscode/pull/870
* feat(copilot): optimize export with copilot experience VSCODE-655 by @alenakhineika in https://github.com/mongodb-js/vscode/pull/880
* feat(participant): in-app notification to introduce users to copilot extension VSCODE-633 by @alenakhineika in https://github.com/mongodb-js/vscode/pull/875
* fix: show export to language icon only when copilot is active VSCODE-655 by @alenakhineika in https://github.com/mongodb-js/vscode/pull/882

## New Contributors
* @gagik made their first contribution in https://github.com/mongodb-js/vscode/pull/862

**Full Changelog**: https://github.com/mongodb-js/vscode/compare/v1.9.3...v1.10.0


## [v1.9.3](https://github.com/mongodb-js/vscode/releases/tag/v1.9.3) - 2024-10-24

## What's Changed
* chore: Adapt message content access to latest vscode API VSCODE-640 by @nirinchev in https://github.com/mongodb-js/vscode/pull/857
* fix: Replace regex fragment matching with streaming KMP VSCODE-639 by @nirinchev in https://github.com/mongodb-js/vscode/pull/837

**Full Changelog**: https://github.com/mongodb-js/vscode/compare/v1.9.2...v1.9.3


## [v1.9.2](https://github.com/mongodb-js/vscode/releases/tag/v1.9.2) - 2024-10-21

## What's Changed
* fix(chat): show empty docs msg, schema set msg content correctly VSCODE-628 by @Anemy in https://github.com/mongodb-js/vscode/pull/851
* chore(participant): move docs references after content VSCODE-629 by @Anemy in https://github.com/mongodb-js/vscode/pull/852
* fix: use new connection form by @paula-stacho in https://github.com/mongodb-js/vscode/pull/815
* chore(chat): update docs chatbot request headers VSCODE-634 by @Anemy in https://github.com/mongodb-js/vscode/pull/853
* chore: use the latest vsce that adds the chat-participant tag VSCODE-638 by @alenakhineika in https://github.com/mongodb-js/vscode/pull/855


**Full Changelog**: https://github.com/mongodb-js/vscode/compare/v1.9.1...v1.9.2


## [v1.9.1](https://github.com/mongodb-js/vscode/releases/tag/v1.9.1) - 2024-09-30

## What's Changed
* fix: remove enabledApiProposals from package.json VSCODE-631 by @Anemy in https://github.com/mongodb-js/vscode/pull/849


**Full Changelog**: https://github.com/mongodb-js/vscode/compare/v1.9.0...v1.9.1


## [v1.9.0](https://github.com/mongodb-js/vscode/releases/tag/v1.9.0) - 2024-09-30

## What's Changed
* feat(chat): add VSCode Copilot chat participant VSCODE-528 in https://github.com/mongodb-js/vscode/pull/839

## New Contributors
* @nirinchev made their first contribution in https://github.com/mongodb-js/vscode/pull/813

**Full Changelog**: https://github.com/mongodb-js/vscode/compare/v1.8.1...v1.9.0


## [v1.8.1](https://github.com/mongodb-js/vscode/releases/tag/v1.8.1) - 2024-09-02

## What's Changed
* fix: cannot find module electron VSCODE-598 by @alenakhineika in https://github.com/mongodb-js/vscode/pull/799


**Full Changelog**: https://github.com/mongodb-js/vscode/compare/v1.8.0...v1.8.1


## [v1.8.0](https://github.com/mongodb-js/vscode/releases/tag/v1.8.0) - 2024-08-29

## What's Changed
* feat: show survey VSCODE-562 by @paula-stacho in https://github.com/mongodb-js/vscode/pull/780
* fix(editors): don't show connect code lens on regular js files VSCODE-538 by @Anemy in https://github.com/mongodb-js/vscode/pull/789

**Full Changelog**: https://github.com/mongodb-js/vscode/compare/v1.7.0...v1.8.0


## [v1.7.0](https://github.com/mongodb-js/vscode/releases/tag/v1.7.0) - 2024-08-01

## What's Changed
* feat(telemetry): update connection telemetry VSCODE-560 by @alenakhineika in https://github.com/mongodb-js/vscode/pull/764
* refactor(telemetry): use resolved srv from topology VSCODE-563 by @alenakhineika in https://github.com/mongodb-js/vscode/pull/765

**Full Changelog**: https://github.com/mongodb-js/vscode/compare/v1.6.1...v1.7.0


## [v1.6.1](https://github.com/mongodb-js/vscode/releases/tag/v1.6.1) - 2024-07-15

## What's Changed
* fix: disconnect extension when server is closed VSCODE-536 by @alenakhineika in https://github.com/mongodb-js/vscode/pull/734
* chore(deps): bump mongosh VSCODE-548 by @mabaasit in https://github.com/mongodb-js/vscode/pull/752
* fix: remove changelog from the bundle VSCODE-551 by @alenakhineika in https://github.com/mongodb-js/vscode/pull/758

**Full Changelog**: https://github.com/mongodb-js/vscode/compare/v1.6.0...v1.6.1


## [v1.6.0](https://github.com/mongodb-js/vscode/releases/tag/v1.6.0) - 2024-04-23

## What's Changed
* feat: add export to Rust and PHP VSCODE-411 by @paula-stacho in https://github.com/mongodb-js/vscode/pull/676
* chore(ci): sign using package by @mabaasit in https://github.com/mongodb-js/vscode/pull/678
* fix: include export mode when retrieving import statements VSCODE-440 by @paula-stacho in https://github.com/mongodb-js/vscode/pull/677
* fix: remove userId COMPASS-7608 by @paula-stacho in https://github.com/mongodb-js/vscode/pull/690
* feat: add changeActiveConnection command to palette by @benjlevesque in https://github.com/mongodb-js/vscode/pull/700
* feat: show simpler uuid format VSCODE-470 by @paula-stacho in https://github.com/mongodb-js/vscode/pull/701
* feat(playground): add support local require VSCODE-468 by @mabaasit in https://github.com/mongodb-js/vscode/pull/718

## New Contributors
* @paula-stacho made their first contribution in https://github.com/mongodb-js/vscode/pull/676
* @benjlevesque made their first contribution in https://github.com/mongodb-js/vscode/pull/700

**Full Changelog**: https://github.com/mongodb-js/vscode/compare/v1.5.0...v1.6.0


## [v1.5.0](https://github.com/mongodb-js/vscode/releases/tag/v1.5.0) - 2024-01-24

## What's Changed
* VSCODE-505: stream support in UI by @shaketbaby in https://github.com/mongodb-js/vscode/pull/643
* feat(webview): use new connection form, remove old form VSCODE-491 by @Anemy in https://github.com/mongodb-js/vscode/pull/636
* fix: add explicit ordering for stream processor context menu actions by @pulkitkalra-mdb in https://github.com/mongodb-js/vscode/pull/654
* chore: close connection string input when opening form VSCODE-507 by @Anemy in https://github.com/mongodb-js/vscode/pull/656
* fix: ensure extension output populates ObjectIds in stream by @pulkitkalra-mdb in https://github.com/mongodb-js/vscode/pull/657
* feat(connect-form): add OIDC device auth flow with preference VSCODE-503 by @Anemy in https://github.com/mongodb-js/vscode/pull/658
* feat(connections): add edit connection context menu action VSCODE-406 by @Anemy in https://github.com/mongodb-js/vscode/pull/655
* chore(deps): update mongodb and devtools dependencies by @Anemy in https://github.com/mongodb-js/vscode/pull/662
* chore: cancel connection attempt when removing connection, update assert to expect in webview and connection controller tests by @Anemy in https://github.com/mongodb-js/vscode/pull/667

## New Contributors
* @pulkitkalra-mdb made their first contribution in https://github.com/mongodb-js/vscode/pull/654

**Full Changelog**: https://github.com/mongodb-js/vscode/compare/v1.4.0...v1.5.0


## [v1.4.0](https://github.com/mongodb-js/vscode/releases/tag/v1.4.0) - 2024-01-09

## What's Changed
* feat: send logs to a LogOutputChannel VSCODE-429 by @baileympearson in https://github.com/mongodb-js/vscode/pull/616
* feat: enable language server logs to be opened as a log file VSCODE-429 by @baileympearson in https://github.com/mongodb-js/vscode/pull/618
* fix(explorer): auto-open connection when done connecting, fix auto open on delete VSCODE-325 VSCODE-398 by @Anemy in https://github.com/mongodb-js/vscode/pull/619
* feat: adds a new overview screen based on LeafyGreen components VSCODE-485 by @himanshusinghs in https://github.com/mongodb-js/vscode/pull/617
* chore(playground): codelens for active connection will inform about default connected database VSCODE-316 by @himanshusinghs in https://github.com/mongodb-js/vscode/pull/621
* feat(webview): use Compass' connection form in the new overview page VSCODE-488 by @Anemy in https://github.com/mongodb-js/vscode/pull/622
* chore(connections): remove keytar, keytar migration, and connection model migration VSCODE-499 by @Anemy in https://github.com/mongodb-js/vscode/pull/625
* chore: add connection storage, simplify connection controller and storage controller interfaces by @Anemy in https://github.com/mongodb-js/vscode/pull/627
* chore: update segment client VSCODE-498, VSCODE-501 by @mcasimir in https://github.com/mongodb-js/vscode/pull/626
* chore(ci): sign vsix file VSCODE-493 by @mcasimir in https://github.com/mongodb-js/vscode/pull/632
* feat(webview): update feature flag to always show new connection form VSCODE-490 by @Anemy in https://github.com/mongodb-js/vscode/pull/637
* feat: add OIDC auth support, enable in new form VSCODE-354 by @Anemy in https://github.com/mongodb-js/vscode/pull/630
* VSCODE-504: streams support in playgrounds by @shaketbaby in https://github.com/mongodb-js/vscode/pull/633

## New Contributors
* @baileympearson made their first contribution in https://github.com/mongodb-js/vscode/pull/616
* @shaketbaby made their first contribution in https://github.com/mongodb-js/vscode/pull/633

**Full Changelog**: https://github.com/mongodb-js/vscode/compare/v1.3.1...v1.4.0


## [v1.3.1](https://github.com/mongodb-js/vscode/releases/tag/v1.3.1) - 2023-10-09

## What's Changed
* fix(playgrounds): stringify non-string types for playground output VSCODE-466 by @Anemy in https://github.com/mongodb-js/vscode/pull/590
* feat: update mongosh to 2.0.0 and driver to 6.0.0 VSCODE-453 by @addaleax in https://github.com/mongodb-js/vscode/pull/592
* feat(autocomplete): introduce $vectorSearch aggregation stage to 7.1 and 7.0.x COMPASS-7064 by @mcasimir in https://github.com/mongodb-js/vscode/pull/593
* fix: resolve SRV hostname before passing it to mongodb-cloud-info VSCODE-442 by @addaleax in https://github.com/mongodb-js/vscode/pull/594

**Full Changelog**: https://github.com/mongodb-js/vscode/compare/v1.2.1...v1.3.1


