import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonList, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import { add, logoGithub, logoGoogle, logoApple, helpOutline } from 'ionicons/icons';
import Code from '../components/Code';

import { Camera, CameraResultType } from '@capacitor/camera';

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri
  });

  // image.webPath will contain a path that can be set as an image src.
  // You can access the original file using image.path, which can be
  // passed to the Filesystem API to read the raw data of the image,
  // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
  const imageUrl = image.webPath;

  // Can be set to the src of an image now
  alert(imageUrl);
};

const Codes: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>

          <IonButtons slot="start">
            <IonButton>Edit</IonButton>
          </IonButtons>

          <IonTitle>Codes</IonTitle>

          <IonButtons slot="end">
            <IonButton onClick={() => takePicture()}>
              <IonIcon slot="icon-only" icon={add}></IonIcon>
            </IonButton>
          </IonButtons>
  
        </IonToolbar>

        <IonToolbar>
          <IonSearchbar></IonSearchbar>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonList inset={true}>
          <Code
            name='Apple'
            user='user@gmail.com'
            code='123123'
            icon={logoApple}
          ></Code>

          <Code
            name='Google'
            user='user2@gmail.com'
            code='456456'
            icon={logoGoogle}
          ></Code>

          <Code
            name='GitHub'
            user='your-username'
            code='789789'
            icon={logoGithub}
          ></Code>

          {[...Array(20).keys()].map(i => <Code name={'test-'+i} user='user' code='000000' icon={helpOutline} />)} 
        </IonList>

        {/* <IonToast
          trigger="open-toast"
          message="Code Copied!"
          position="bottom"
          positionAnchor="footer"
          duration={1000}
        ></IonToast> */}

      </IonContent>
    </IonPage>
  );
};

export default Codes;
