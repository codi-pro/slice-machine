import type { TypeOf } from 'yup'
import { AiOutlineFieldNumber } from 'react-icons/ai'
import { createDefaultWidgetValues } from '../../../../utils'
import { handleMockConfig, handleMockContent } from './Mock'
import { MockConfigForm } from './Mock/Form'

/** {
    "type" : "Number",
    "config" : {
      "label" : "number",
      "placeholder" : "Some number"
    }
  } */

const { TYPE_NAME, FormFields, schema, create } = createDefaultWidgetValues('Number')

const Meta = {
  icon: AiOutlineFieldNumber,
  title: 'Number',
  description: 'Numbers'
}

export const Number = {
  create,
  MockConfigForm,
  handleMockConfig,
  handleMockContent,
  FormFields,
  TYPE_NAME,
  schema,
  Meta
}

export interface Number extends TypeOf<typeof schema> {}