import { PublicationInfo } from "./PublicationInfo";
import { EditorialPolicy } from "./EditorialPolicy";
import { VetReviewBadge } from "./VetReviewBadge";

export function GuideFooter() {
  return (
    <div className="space-y-10">

      <PublicationInfo />

      <EditorialPolicy />

      <VetReviewBadge />

    </div>
  );
}