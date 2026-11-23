export interface ICreateFeedbackPayload {
  assignmentId: string;
  rating: number;
  comment?: string;
}