# Game-Bug Bot's Commands

## Important

| Name | Permission | Description | Example |
| --- | --- | --- | --- |
| `;setup` | Administrator | Creates two new channels (**#user-reports** and **#bug-reports**) and a category (**reports**) where both of the channels will go to | `;setup` |

## Reports

| Name | Permission | Description | Example |
| --- | --- | --- | --- |
| `;ureport [username] <description> <proof>` | Everyone [only in **#user-reports**] | Report rule-breakers in a game | `;ureport Player1 Using flying exploits in the game https://imgur.com/` |
| `;breport [type of bug] <description> <proof>` | Everyone [only in **#bug-reports**] | Report a bug that you have in a game so that the developers can fix it | `;breport Placement the bench closest to spawn isn't in-line with the rest of the benches https://imgur.com/` |
| `;urhelp` | Manage Messages | Creates an embed with the necessary information on how to report a user | `;urhelp` |
| `;brhelp` | Manage Messages | Creates an embed with the necessary information on how to report a bug | `;brhelp` |
| `;deny` | Manage Messages [only in **#user-reports** and **#bug-reports**] | Deletes the last report | `;deny` |

## Extra

| Name | Permission | Description | Example |
| --- | --- | --- | --- |
| `;resources` | Everyone | Sends a DM to the user that used the command containing useful resources for attaching proof to a report | `;resources` |
| `;help` | Everyone | Displays all the necessary information and important links | `;help` |
| `;version` | Everyone | Displays the bot version to let you see if its up-to-date | `;version` |
