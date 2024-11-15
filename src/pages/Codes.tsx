import { IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonList, IonNavLink, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import { add, settingsOutline, createOutline, logoGithub, logoGoogle, logoApple, helpOutline } from 'ionicons/icons';
import Code from '../components/Code';
import QRScanner from './QRScanner';
import Settings from './Settings';

const Codes: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>

          <IonButtons slot="start">
            <IonButton>
              <IonIcon slot="icon-only" icon={createOutline}></IonIcon>
            </IonButton>
          </IonButtons>

          <IonTitle>Codes</IonTitle>

          <IonButtons slot="end">
            <IonNavLink routerDirection="forward" component={() => <Settings />}>
              <IonButton>
                <IonIcon slot="icon-only" icon={settingsOutline}></IonIcon>
              </IonButton>
            </IonNavLink>
          </IonButtons>
  
        </IonToolbar>

        <IonToolbar>
          <IonSearchbar></IonSearchbar>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonNavLink routerDirection="forward" component={() => <QRScanner />}>
            <IonFabButton>
              <IonIcon icon={add}></IonIcon>
            </IonFabButton>
          </IonNavLink>
        </IonFab>

        <IonList inset={true}>
          <Code
            name='Apple'
            user='user@gmail.com'
            code='123123'
            icon={logoApple}
          />

          <Code
            name='Google'
            user='user2@gmail.com'
            code='456456'
            icon={logoGoogle}
          />

          <Code
            name='GitHub'
            user='your-username'
            code='789789'
            icon={logoGithub}
          />

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
