# Contractor Interview

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Problem Description

We have a JSON object representing the configuration for a site. This object, known as the site config, consists of three properties: "description", "key", and "floorplans". Your task is to develop a UI that allows users to add floorplans to the site config.

### Floorplan Properties

Each floorplan within the site config has the following properties:

- **Description**: A string with any length describing the floorplan.
- **Code**: A unique 1-4 character length string representing the floorplan.
- **Key**: A concatenation of the site config's key and the floorplan's code, separated by a period ".". Since the codes are unique, a floorplan's key will also be unique.

For example: If the site config key is "site" and a floorplan's code is "fp1", then the floorplan's key will be "site.fp1".

### User Interface Requirements

1. **Adding a New Floorplan**: When adding a new floorplan, the user must provide values for the "description" and "code" properties. The "key" property should automatically populate once the "code" property is filled out.

2. **Editing a Floorplan (Optional)**: Users should have the option to edit the "description" and "code" of an existing floorplan. Any updates to the "code" property should be properly reflected on the "key" property.

3. **Deleting a Floorplan (Optional)**: Users should have the option to delete a floorplan from the site config.