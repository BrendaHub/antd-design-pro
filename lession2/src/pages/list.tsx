import React from 'react';
import router from 'umi/router';
import { DatePicker } from 'antd';
import {IntlProvider, FormattedNumber, FormattedDate } from 'react-intl';
import { formatMessage, setLocale, getLocale, FormattedMessage } from 'umi-plugin-locale';
import styles from './list.css';

// 获取指定文字的多语言版本
const formatedText = formatMessage(
  {
    id: 'WELCOME_TO_UMI_WORLD',
  },
  {
    name: '小伙子',
  },
);

const App = ({importantDate}) => (
  <div>
    <FormattedDate
      value={importantDate}
      year="numeric"
      month="long"
      day="numeric"
      weekday="long"
    />
  </div>
);


const DataApp1 = ({importtenData}) => (
  <div>
    <FormattedNumber
        value={importtenData}
        style="unit"
        unit="kilobyte"
        unitDisplay="narrow"
      />
  </div>
);


      // 设置为 en-US
      // setLocale('en-US');
      setLocale('zh-CN');

const List = ({importantDate: any = new Date(1459913574887) }) => {
  return (
    <IntlProvider locale={navigator.language}>
    <div className={styles.normal}>
      <h1>Page list</h1>
      <h4>日历控件</h4>
      <h3>当前语言为： {getLocale()}</h3>
      <h2>{formatedText}</h2>
      <FormattedMessage id="WELCOME_TO_UMI_WORLD" values={{ name: '小伙子' }} />
      <DataApp1 importtenData={343488009000000}/>
      <App importantDate={new Date(1459913574887)} />
      <DatePicker/>

      <label defaultValue="{Date.now()}"/>
      <h2 onClick={()=>{router.goBack()}}>返回</h2>
    </div>
    </IntlProvider>
  );
}
 
export default List;
