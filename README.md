# dnd-website-template
This is a template website for anyone to fork and create their own dnd website with little amount of coding knowledge required!
This site is built using Vue.js and powered by Vuetify.

# Sections
## Home
The Home page is the landing page for your site and the first thing most users will
see. You can use this section for things specific to your campaign that does not fall
under the predefined categories, such as house rules, additional lore, etc.

The home page is controlled by the markdown file `src/assets/home.md`.

## History
The History page is the place to go when detailing the history of your world! It is set up like a timeline.

The History page is controlled by the yaml file `src/assets/history.yaml`

You can define a list of major events. The fields for each list entry are:

| Field         | Description                                                                                                                                                               | Required? |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `header`      | The header for the event.                                                                                                                                                 | Yes       |
| `color`       | Hex code for the color. Ex: `"#ffd700"`                                                                                                                                   | Yes       |
| `description` | Details about the event.                                                                                                                                                  | Yes       |
| `icon`        | Icon to show on the item. Must start with `mdi-` and correspond to an icon in the [Official Material Design Icons Page](https://materialdesignicons.com/). Ex: `mdi-star` | No        |
|               |                                                                                                                                                                           |           |

## Current Events
The Current Events page is the spot to go for everything up to date in your world.

The Current Events page is controlled by the markdown file `src/assets/current_events.md`

## Nations
This page is where you can view all the nations of your world.

The Nations page is controlled by the yaml file `src/assets/nations.yaml`, and by markdown files in the folder `src/assets/nations`.

Each nation is a separate list entry. The fields are: 


| Field                   | Description                                                                                                     | Required? |
| ----------------------- | --------------------------------------------------------------------------------------------------------------- | --------- |
| `name`                  | The name of the nation.                                                                                         | Yes       |
| `description_file_name` | The name of the file in the `src/assets/nations` folder that contains the markdown description for this nation. | Yes       |
| `images`                | A list of urls and optional captions. See [src/assets/nations.yaml](src/assets/nations.yaml) for examples.      | No        |


## Factions
This page is where you can view all the different factions in your world.

The Factions page is controlled by the yaml file `src/assets/factions.yaml`, and by markdown files in the folder `src/assets/factions`.

Each faction is a separate list entry. The fields are: 


| Field                   | Description                                                                                                      | Required? |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------- | --------- |
| `name`                  | The name of the faction.                                                                                         | Yes       |
| `description_file_name` | The name of the file in the `src/assets/factions` folder that contains the markdown description for this nation. | Yes       |
| `images`                | A list of urls and optional captions. See [src/assets/factions.yaml](src/assets/factions.yaml) for examples.     | No        |
## Characters
This page is where you can view all the different characters, NPC or PC, in your world.

The Characters page is controlled by the yaml file `src/assets/characters.yaml`, and by markdown files in the folder `src/assets/characters`.

Each character is a separate list entry. The fields are: 


| Field                   | Description                                                                                                      | Required? |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------- | --------- |
| `name`                  | The name of the character.                                                                                         | Yes       |
| `description_file_name` | The name of the file in the `src/assets/characters` folder that contains the markdown description for this nation. | Yes       |
| `images`                | A list of urls and optional captions. See [src/assets/characters.yaml](src/assets/characters.yaml) for examples.     | No        |

## Quests
The Quests page is the place to go to keep track of the active quests your party is doing.

The Quests page is controlled by the yaml file `src/assets/history.yaml`

You can define a list of major events. The fields for each list entry are:

| Field       | Description                                                     | Required? |
| ----------- | --------------------------------------------------------------- | --------- |
| `name`      | The name of the quest.                                          | Yes       |
| `desc`      | The details about the quest.                                    | Yes       |
| `completed` | `true` or `false` depending on if the quest is complete or not. | Yes       |

## Recap
The Recap page serves as a log of the campaign.

The Recap page is controlled by markdown files in the `src/assets/recaps` folder. You can put whatever you want in them, but the file name needs to be the day of the session, saved in the format `YYYY-MM-DD.md` For example, the recap for the session on May 8th, 2022 would be saved as `2022-05-08.md`.
# Deploying to Netlify
## Update the name
To update the name of your site, update the `app` field in [src/globals.js](src/globals.js).
## Update the favicon
You can set the favicon (in `public/favicon.ico`) to whatever youd like! I personally use https://realfavicongenerator.net/ to convert an image to a favicon. Just replace the file.
## Setting up Netlify
First, create an account at https://www.netlify.com/. To save time, I recommend creating a Netlify account using your GitHub account, as you will need to link Netlify to GitHub at some stage.

Click `Add new site` -> `Import an existing project`.

Click on `GitHub` in the `Connect to Git provider` section. Your repository should appear in the list.

You shouldn't need to change any of the settings, as this project was built with the default Netlify settings in mind.

After clicking `Deploy Site`, your site should build and deploy!

To update the url, click `Site Settings` and then click `Change site name`.

# Development Commands
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Deploy to Netlify
```
npm run deploy
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
