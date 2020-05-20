# Game-Bug Bot's Commands

## Important

| Name | Permission | Description |
| --- | --- | --- |
| `;setup` | Administrator | Creates two new channels (**#user-reports** and **#bug-reports**) and a category (**reports**) where both of the channels will go to, and sends instruction embeds into both channels |
| `;help` | Everyone | Displays all the necessary information and important links |

## Main

| Name | Description/Permissions | Example/Description |
| --- | --- | --- |
| `;ureport [username] <description> <proof>` | Report rule-breakers in a game [only in **#user-reports**] | `;ureport Player1 Using flying exploits in the game https://imgur.com/` |
| `;breport [type of bug] <description> <proof>` | Report a bug that you have in a game so that the developers can fix it [only in **#bug-reports**] | `;breport Placement the bench closest to spawn isn't in-line with the rest of the benches https://imgur.com/` |
| `;slowmode [time]s/m/h` | Sets the slowmode to the time you type in (s = seconds, m = minutes, h = hours) [6 hours max, requires the Administrator permission] | `;slowmode 5m` |
| `;clr [amount]` or `;clear [amount]` | Clear messages in the chat, cannot be used in **#user-reports** and **#bugreports** [Requires the Manage Messages permission] | `;clr 50` or `;clear 50` |
| `;deny messageID | Reason for Denial` | Deletes the specified report [requires the Manage Messages permission, only to be used in **#user-reports** and **#bug-reports**] | `;deny 712746548731314218 | Not a Bug, please request the feature` |
| `;urhelp` | Manage Messages | Creates an embed with the necessary information on how to report a user |
| `;brhelp` | Manage Messages | Creates an embed with the necessary information on how to report a bug |

## Extra

| Name | Permission | Description |
| --- | --- | --- |
| `;version` | Everyone | Displays the bot version to let you see if its up-to-date |
| `;resources` | Everyone | Sends a DM to the user that used the command containing useful resources for attaching proof to a report |
| `;feedback` | Manage Messages | Give the creator feedback on the bot, it is restricted to users with the Manage Messages permissions due to unecessary, spam feedback |
| `;support` | Everyone | Sends you a DM of methods to DM the creator when you need support |
| `;invite` or `;inv` | Everyone | Invite the bot to your server |
| `;donate` | Everyone | Support the bot on patreon |
