import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonNote, IonPage, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import './Settings.css';
import { informationCircleOutline } from 'ionicons/icons';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="light">
        <IonList inset={true}>
          <IonItem button={true}>
            <IonIcon color='tertiary' icon={informationCircleOutline} slot="start" />
            <IonLabel>Import Codes</IonLabel>
          </IonItem>
          <IonItem button={true}>
            <IonIcon color='tertiary' icon={informationCircleOutline} slot="start" />
            <IonLabel>Export Codes</IonLabel>
          </IonItem>
          {/* <IonItem>
            <IonIcon color='tertiary' icon={airplaneOutline} slot="start" />
            <IonLabel>Sample toggle</IonLabel>
            <IonToggle slot="end" />
          </IonItem> */}
        </IonList>
        <IonNote color="medium" class="ion-margin-horizontal">
          Codes app version 0.0.1
        </IonNote>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
