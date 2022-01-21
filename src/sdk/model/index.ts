export interface CalibrationEstimate {
  id: number;
  title: string;
  contents: string;
  requesterName: string;
  companyName: string;
  companyAddress: string;
  contact: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface Manager {
  id: number;
  name: string;
}

export interface Notice {
  id: number;
  title: string;
  contents: string;
  createdAt: string;
  updatedAt: string;
}

export interface NoticeDetail extends Notice {
  files: {
    id: number;
    name: string;
    location: string;
  }[];
}
