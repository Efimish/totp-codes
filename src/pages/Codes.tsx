import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonList, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import { add, logoGithub, logoGoogle, logoApple, helpOutline } from 'ionicons/icons';
import Code from '../components/Code';

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
