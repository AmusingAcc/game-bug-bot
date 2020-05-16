# Game-Bug Bot's Commands

## Important

| Name | Permission | Description |
| --- | --- | --- |
| `;setup` | Administrator | Creates two new channels (**#user-reports** and **#bug-reports**) and a category (**reports**) where both of the channels will go to, and sends instruction embeds into both channels |

## Reports

| Name | Description/Permissions | Example/Description |
| --- | --- | --- |
| `;ureport [username] <description> <proof>` | Report rule-breakers in a game [only in **#user-reports**] | `;ureport Player1 Using flying exploits in the game https://imgur.com/` |
| `;breport [type of bug] <description> <proof>` | Report a bug that you have in a game so that the developers can fix it [only in **#bug-reports**] | `;breport Placement the bench closest to spawn isn't in-line with the rest of the benches https://imgur.com/` |
| `;urhelp` | Manage Messages | Creates an embed with the necessary information on how to report a user |
| `;brhelp` | Manage Messages | Creates an embed with the necessary information on how to report a bug |
| `;deny` | Manage Messages | Deletes the last report [only in **#user-reports** and **#bug-reports**] |

## Extra

| Name | Permission | Description |
| --- | --- | --- |
| `;resources` | Everyone | Sends a DM to the user that used the command containing useful resources for attaching proof to a report |
| `;help` | Everyone | Displays all the necessary information and important links |
| `;version` | Everyone | Displays the bot version to let you see if its up-to-date |
| `;feedback` | Manage Messages | Give the creator feedback on the bot, it is restricted to users with the Manage Messages permissions due to unecessary, spam feedback |
