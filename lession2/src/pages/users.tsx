
import React from 'react';
import styles from './users.css';
import Prompt from 'umi/prompt';
import { Popconfirm, message, DatePicker } from 'antd';
import dynamic from 'umi/dynamic';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import router from 'umi/router';

function confirm(e:any) {
  console.log(e);
  message.success('Click on Yes');
  router.goBack()
}

function cancel(e:any) {
  console.log(e);
  message.error('Click on No');
}
// 延时 1s 渲染的组件。
// const Users = dynamic({
//   loader: () => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(() => 
//         <div className={styles.normal}>
//         <h1>Page users</h1>
//         {/* {
//           router.goBack()
//         } */}
//         <h1>Prompt</h1>
//         <Prompt
//           when={true}
//           message={location => {
//             return window.confirm(`confirm to leave to ${location.pathname}?`);
//           }}
//         />
//         <Popconfirm
//             title="Are you sure delete this task?"
//             onConfirm={confirm}
//             onCancel={cancel}
//             okText="Yes"
//             cancelText="No"
//           >
//           <a href="#">Delete</a>
//         </Popconfirm>
//         mountNode
//       </div>
//         );
//       }, /* 1s */10000);
//     });
//   },
// });

// 或者用 async 语法
const delay = (timeout: number) => new Promise(resolve => setTimeout(resolve, timeout));
const Users = dynamic({
  loader: async function() {
    await delay(/* 1s */1000);
    return () => 
      <div className={styles.normal}>
        <h1>Page users</h1>
        {/* {
          router.goBack()
        } */}
        <h1>Prompt</h1>
        <h3>
          <DatePicker/>
        </h3>
        <Prompt
          when={true}
          message={location => {
            return window.confirm(`confirm to leave to ${location.pathname}?`);
          }}
        />
        <Popconfirm
            title="Are you sure delete this task?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
          <a href="#">Delete</a>
        </Popconfirm>
        mountNode
      </div>
    ;
  },
});

export default Users;