import {
  mockTelegramEnv,
  parseInitData,
  retrieveLaunchParams,
} from "@telegram-apps/sdk-react";

// It is important, to mock the environment only for development purposes. When building the
// application, import.meta.env.DEV will become false, and the code inside will be tree-shaken,
// so you will not see it in your final bundle.
if (import.meta.env.DEV) {
  let shouldMock: boolean;

  // Try to extract launch parameters to check if the current environment is Telegram-based.
  try {
    // If we are able to extract launch parameters, it means that we are already in the
    // Telegram environment. So, there is no need to mock it.
    retrieveLaunchParams();

    // We could previously mock the environment. In case we did, we should do it again. The reason
    // is the page could be reloaded, and we should apply mock again, because mocking also
    // enables modifying the window object.
    shouldMock = !!sessionStorage.getItem("____mocked");
  } catch (e) {
    shouldMock = true;
  }

  if (shouldMock) {
    const initDataRaw =
      "query_id=AAGL8vYXAAAAAIvy9heZyZp1&user=%7B%22id%22%3A402059915%2C%22first_name%22%3A%22%D0%98%D0%BB%D1%8C%D0%B4%D0%B0%D1%80%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22wilidon%22%2C%22language_code%22%3A%22en%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1724577522&hash=c8a50ab1e9402c28496f775b952c70eaa1fc0cc24ea60f67e579ac7a7a0db594";
    // const initDataRaw = new URLSearchParams([
    //   [
    //     "user",
    //     JSON.stringify({
    //       id: 99281932,
    //       first_name: "Andrew",
    //       last_name: "Rogue",
    //       username: "rogue",
    //       language_code: "en",
    //       is_premium: true,
    //       allows_write_to_pm: true,
    //     }),
    //   ],
    //   [
    //     "hash",
    //     "89d6079ad6762351f38c6dbbc41bb53048019256a9443988af7a48bcad16ba31",
    //   ],
    //   ["auth_date", "1716922846"],
    //   ["start_param", "debug"],
    //   ["chat_type", "sender"],
    //   ["chat_instance", "8428209589180549439"],
    // ]).toString();

    mockTelegramEnv({
      themeParams: {
        accentTextColor: "#6ab2f2",
        bgColor: "#17212b",
        buttonColor: "#5288c1",
        buttonTextColor: "#ffffff",
        destructiveTextColor: "#ec3942",
        headerBgColor: "#17212b",
        hintColor: "#708499",
        linkColor: "#6ab3f3",
        secondaryBgColor: "#232e3c",
        sectionBgColor: "#17212b",
        sectionHeaderTextColor: "#6ab3f3",
        subtitleTextColor: "#708499",
        textColor: "#f5f5f5",
      },
      initData: parseInitData(initDataRaw),
      initDataRaw,
      version: "7.2",
      platform: "tdesktop",
    });
    sessionStorage.setItem("____mocked", "1");

    console.info(
      "As long as the current environment was not considered as the Telegram-based one, it was mocked. Take a note, that you should not do it in production and current behavior is only specific to the development process. Environment mocking is also applied only in development mode. So, after building the application, you will not see this behavior and related warning, leading to crashing the application outside Telegram."
    );
  }
}
