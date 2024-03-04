import React from 'react'
import { MultiSelectElement, RadioButtonGroup, SwitchElement, TextFieldElement, TextareaAutosizeElement } from 'react-hook-form-mui'

export default function CustomInput({ inputScheme }) {
  const { name, mandatory, type, defaultValue, acceptedValues } = inputScheme
  switch (type) {
    case "BOOLEAN":
      const options = [
        {
          id: '1',
          label: 'Si'
        },
        {
          id: '2',
          label: 'No'
        }
      ]

      return (
        <RadioButtonGroup
          label={name}
          name={name}
          options={options}
          required={mandatory}
          helperText={"Este campo es requerido"}
          row
        />
      )
      break;
    case "TEXT_AREA":
      return (
        <TextareaAutosizeElement
          name={name} label={name} required={mandatory} fullWidth rows={2}
        />
      )

      break;

    case "MULTIPLE_VALUES_LIST":
      return (
        <MultiSelectElement
          name={name} label={name} required={mandatory} fullWidth
          options={acceptedValues}
        />
      )
      break;

    case "radio":

      const values = acceptedValues.map((value, index) => {
        return { id: index.toString(), label: value }
      })
      return (
        <RadioButtonGroup
          label={name}
          name={name}
          options={values}
          required={mandatory}
          row
        />
      )
      break;

    case "TEXT":
      return (
        <TextFieldElement name={name} label={name} required={mandatory} fullWidth />
      )
      break;



    default:

      break;
  }

}
