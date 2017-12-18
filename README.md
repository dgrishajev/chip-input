# Chip Input

**Angular chip input**

## Running

1. Clone this repo: `git clone https://github.com/dgrishajev/chip-input.git`.
2. Go to the project directory: `cd chip-input`.
3. Install packages with `npm install`.
4. Run `ng serve` for a dev server.
5. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Description

Chip input component implemented as a form control with `ControlValueAccessor` for Angular 2+.

## User story

When a user enters text in the input field, a list of suggestions fetched from https://swapi.co/api/people/ is shown, that can be chosen by the user. The suggestions can be navigated using the keyboard or the mouse, a click or enter press selects the currently highlighted item. The selected item is added as a chip into the input field. This process can be repeated indefinitely.

## Usage

The component can be used with both template-driven and reactive Angular forms.

### Template-driven form

In this case the ngModel binding is used. Make sure to import `FormsModule` and `ChipInputModule` to your module.

If you want to define selected chips by default initialize them as an array of objects in your component:

```
charactersChips: Array<Object> = [
  {
    "name": "Leia Organa",
    "height": "150",
    "mass": "49",
    "hair_color": "brown",
    "skin_color": "light",
    "eye_color": "brown",
    "birth_year": "19BBY",
    "gender": "female",
    "homeworld": "https://swapi.co/api/planets/2/",
    "films": [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/3/",
      "https://swapi.co/api/films/1/",
      "https://swapi.co/api/films/7/"
    ],
    "species": [
      "https://swapi.co/api/species/1/"
    ],
    "vehicles": [
      "https://swapi.co/api/vehicles/30/"
    ],
    "starships": [], 
    "created": "2014-12-10T15:20:09.791000Z",
    "edited": "2014-12-20T21:17:50.315000Z",
    "url": "https://swapi.co/api/people/5/"
  },
]
```

Add the following snippet inside your template:

```
<form #templateForm="ngForm">
  <app-chip-input name="chips" [(ngModel)]="charactersChips"></app-chip-input>
</form>
```

### Model-driven forms

In this option the value accessor of reactive forms is used. Make sure to import `ReactiveFormsModule` and `ChipInputModule` to your module as well as `FormGroup` and `FormBuilder` to your component.

If you want to define selected chips by default pass them as an array of objects to your form group in your component appropriate lifecycle hook:

```
this.charactersForm = this.fb.group({
  chips: [
    [
      {
        "name": "Leia Organa",
        "height": "150",
        "mass": "49",
        "hair_color": "brown",
        "skin_color": "light",
        "eye_color": "brown",
        "birth_year": "19BBY",
        "gender": "female",
        "homeworld": "https://swapi.co/api/planets/2/",
        "films": [
          "https://swapi.co/api/films/2/",
          "https://swapi.co/api/films/6/",
          "https://swapi.co/api/films/3/",
          "https://swapi.co/api/films/1/",
          "https://swapi.co/api/films/7/"
        ],
        "species": [
          "https://swapi.co/api/species/1/"
        ],
        "vehicles": [
          "https://swapi.co/api/vehicles/30/"
        ],
        "starships": [],
        "created": "2014-12-10T15:20:09.791000Z",
        "edited": "2014-12-20T21:17:50.315000Z",
        "url": "https://swapi.co/api/people/5/"
      }
    ]
  ]
```

Add the following snippet inside your template:

```
<form [formGroup]="charactersForm">
  <app-chip-input formControlName="chips"></app-chip-input>
</form>
```
