import { Feedback as TFeedback } from "../api/feedback/Feedback";

export const FEEDBACK_TITLE_FIELD = "customer";

export const FeedbackTitle = (record: TFeedback): string => {
  return record.customer?.toString() || String(record.id);
};
