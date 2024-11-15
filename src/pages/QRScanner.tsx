import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { BrowserQRCodeReader, BrowserCodeReader } from '@zxing/browser';
import { useEffect } from "react";

const scanQRCcode = async () => {
  const reader = new BrowserQRCodeReader();
  const devices = await BrowserCodeReader.listVideoInputDevices();
  const deviceId = devices[0].deviceId;
  const controls = await reader.decodeFromVideoDevice(deviceId, "qr-code", (result) => {
    if (result) {
      controls.stop();
      alert(result.getText());
    }
  })
}

const QRScanner: React.FC = () => {
  useEffect(() => {
    scanQRCcode();  
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>

          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>

          <IonTitle>QR Scanner</IonTitle>

        </IonToolbar>
      </IonHeader>
      <IonContent>
        <video width="100%" id="qr-code" />
      </IonContent>
    </IonPage>
  );
};

export default QRScanner;
