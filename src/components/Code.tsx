import { IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonNote, IonText } from '@ionic/react';
import './ExploreContainer.css';
import { trash } from 'ionicons/icons';
import { Clipboard } from '@capacitor/clipboard';

const copyToClipboard = async (text: string) => {
  await Clipboard.write({
    string: text
  });
};

interface CodeProps {
  name: string;
  user: string;
  code: string;
  icon: string;
}

const Code: React.FC<CodeProps> = ({ name, user, code, icon }) => {
  return (
    <IonItemSliding>
      <IonItem
        button={true}
        onClick={() => copyToClipboard(code)}
      >
        <IonIcon icon={icon} slot="start" />
        <IonLabel>
          <IonText>{name}</IonText>
          <br />
          <IonNote>{user}</IonNote>
        </IonLabel>
        <IonNote slot="end">{code}</IonNote>
      </IonItem>

      <IonItemOptions slot="end">
        <IonItemOption color="danger">
          <IonIcon slot="icon-only" icon={trash}></IonIcon>
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default Code;