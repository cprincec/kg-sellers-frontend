"use client";

import { getRequest } from "@/lib/utils/apiCaller";
import { useQuery } from "@tanstack/react-query";
import { IGetOnboardingStepResponse } from "../../lib/interfaces/response.interface";

/**
 * Custom hook to fetch onBoarding step during store setup.
 * Uses React Query for data fetching and caching.
 */

const useGetOnboardingStep = () => {
    const { isPending, data } = useQuery({
        queryKey: ["onboarding-step"],
        queryFn: () =>
            getRequest<IGetOnboardingStepResponse>({
                url: "/onboarding/store-information/get",
            }),

        throwOnError: true,
    });

    return {
        onboardingStep: data?.response,
        isFetchingOnBoardingStep: isPending,
    };
};

export default useGetOnboardingStep;
