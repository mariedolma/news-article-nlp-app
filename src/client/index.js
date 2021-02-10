import { updateUI } from './js/formHandler'
import { postData } from './js/formHandler'
import { getNlp } from './js/getMeaning'
import { getApiKey } from './js/getMeaning'
import { validUrl} from './js/checkForText'
import { validText } from './js/checkForText'
import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

export {
    updateUI,
    postData,
    getNlp,
    getApiKey,
    validUrl,
    validText,
    handleSubmit
}