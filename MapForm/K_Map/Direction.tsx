/* eslint-disable prettier/prettier */
/* eslint-disable no-array-constructor */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */

import { useEffect, useState } from 'react';
import CompassHeading from 'react-native-compass-heading';

const Sensor = ({webviewRef}:any) => {
    let [direction, setDirection] = useState<number>(0);
    useEffect(() => {
      const degree_update_rate = 3;
      CompassHeading.start(degree_update_rate, ({heading, accuracy}) => {
        setDirection(heading);
      });

      return () => {
        CompassHeading.stop();
      };
    }, []);

    useEffect(() => {
      sendDirection();
    });

    const sendDirection = async () => {
      try
      {
        const latlng = new Array();
          const data = {
            picket : 'direction',
            };
            latlng.push(data);
            latlng.push(direction);
          const sendData = JSON.stringify(latlng);
          await webviewRef.current.postMessage(sendData);
      }
      catch (error)
      {

      }
    };
    return (
      <></>
    );
  };

  export default Sensor;
