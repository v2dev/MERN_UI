import { useCategoryFirstLevelViewModel } from "./useCategoryFirstLevelViewModel";
import { useDetailViewModel } from "./useDetailViewModel.js";

export function useCategoryDetailByType(id, type) {

  const isSpiritual = type === "Spiritual";
  const isContact = type === "contact";

  const spiritualVM = useDetailViewModel(id, isSpiritual);
  const contactVM  = useCategoryFirstLevelViewModel(id, isContact);

  return isSpiritual
    ? spiritualVM
    : isContact
    ? contactVM
    : { detailedData: [], loading: false, error: "Unknown type" };
}

