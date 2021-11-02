// interface Website {
//   github: string;

//   twitter: string;

//   zhihu: string;

//   weibo: string;

//   gitee: string;

//   personal_websites: string[];
// }

// interface User {
//   user_name: string;

//   email: string;

//   password: string;

//   role: string;

//   birth: Date;

//   gender: string;

//   background: string;

//   avatar: string;

//   websites: Website;

//   description: string;

//   deleted: boolean;
// }

export interface Article {
  _id: string;

  title: string;

  abstract: string;

  user: string;

  category: string;

  tags: string[];

  content: string;
}
