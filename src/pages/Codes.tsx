import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonNote, IonPage, IonSearchbar, IonText, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import './Codes.css';
import { add, trash, logoGithub, logoGoogle } from 'ionicons/icons';
import { Clipboard } from '@capacitor/clipboard';

const copyToClipboard = async (text: string) => {
  await Clipboard.write({
    string: text
  });
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
            <IonButton>
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

          <IonItemSliding>
            <IonItem
              button={true}
              onClick={() => copyToClipboard('123123')}
            >
              <IonIcon icon={logoGoogle} slot="start" />
              <IonLabel>
                <IonText>Google</IonText>
                <br />
                <IonNote>your-mail-1@gmail.com</IonNote>
              </IonLabel>
              <IonNote slot="end">123 123</IonNote>
            </IonItem>

            <IonItemOptions slot="end">
              <IonItemOption color="danger">
                <IonIcon slot="icon-only" icon={trash}></IonIcon>
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          <IonItemSliding>
            <IonItem
              button={true}
              onClick={() => copyToClipboard('456456')}
            >
              <IonIcon icon={logoGoogle} slot="start" />
              <IonLabel>
                <IonText>Google</IonText>
                <br />
                <IonNote>your-mail-2@gmail.com</IonNote>
              </IonLabel>
              <IonNote slot="end">456 456</IonNote>
            </IonItem>

            <IonItemOptions slot="end">
              <IonItemOption color="danger">
                <IonIcon slot="icon-only" icon={trash}></IonIcon>
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          <IonItemSliding>
            <IonItem
              button={true}
              onClick={() => copyToClipboard('789789')}
            >
              <IonIcon icon={logoGithub} slot="start" />
              <IonLabel>
                <IonText>GitHub</IonText>
                <br />
                <IonNote>your-username</IonNote>
              </IonLabel>
              <IonNote slot="end">789 789</IonNote>
            </IonItem>

            <IonItemOptions slot="end">
              <IonItemOption color="danger">
                <IonIcon slot="icon-only" icon={trash}></IonIcon>
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

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
