import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonNote, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { arrowDown, arrowUp } from 'ionicons/icons';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList inset={true}>
          <IonItem button={true}>
            <IonIcon color='primary' icon={arrowDown} slot="start" />
            <IonLabel>Import Codes</IonLabel>
          </IonItem>

          <IonItem button={true}>
            <IonIcon color='primary' icon={arrowUp} slot="start" />
            <IonLabel>Export Codes</IonLabel>
          </IonItem>
        </IonList>
        <IonNote color="medium" class="ion-margin-horizontal">
          Codes app version 0.0.1
        </IonNote>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
