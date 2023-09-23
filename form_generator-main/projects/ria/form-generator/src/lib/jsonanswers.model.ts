export interface JsonAnswer {
  id: number;
  quiz_id: string;
  quiz_version: number;
  reg_code: number;
  answer_data: Answer[];
  created: Date;
  name: string;
  personal_code: string;
}

export interface Answer {
  id: string;
  value: any;
}
