import { LightningElement, api, track } from 'lwc';

export default class LwcTest extends LightningElement {
    @track dataReceived;

    sendDataToAura() {
        const dataToSend = this.template.querySelector('.dataToSend').value;

        const sendDataEvent = new CustomEvent('sendData', {
            detail: {dataToSend}
        });


        this.dispatchEvent(sendDataEvent);
    }

    @api receiveData(data) {
        this.dataReceived = data;
        console.log(data);
    }

}