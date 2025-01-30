export const getCardDataYourIncome = (data: any) => {
    return [
      {
        id: "userDeposits",
        title: "Total Deposit",
        value: data?.VITE_APP_TOTAL_DEPOSIT || 0.0,
        color: import.meta.env.VITE_APP_TOTAL_DEPOSIT_COLOR || "#ffffff",
      },
      {
        id: "profit",
        title: "Your Returns",
        value: data?.VITE_APP_RETURNS || 0.0,
        color: import.meta.env.VITE_APP_RETURNS_COLOR || "#ffffff",
      },
      {
        id: "totalUserTotalWithdrawn",
        title: "Total Withdrawn",
        value: data?.VITE_APP_TOTAL_WITHDRAWN || 0.0,
        color: import.meta.env.VITE_APP_TOTAL_WITHDRAWN_COLOR || "#ffffff",
      },
      {
        id: "interestRate",
        title: "Interest Rate",
        value: `${(parseInt(data?.VITE_APP_INTEREST_RATE) / 10).toFixed(2) || "0.00"}% Per Day`,
        color: import.meta.env.VITE_APP_INTEREST_RATE_COLOR || "#ffffff",
      },
    ];
  };
  

  export const getCardDataContractData = (data: any) => [
    {
      id: "deposited",
      title: "Deposited",
      value: data?.totalDeposits || 0,
      unit: "BNB",
      iconClass: "bi bi-wallet2 fs-3 text-primary",
    },
    {
      id: "users",
      title: "Users",
      value: data?.totalUsers || 0,
      unit: "*approx",
      iconClass: "bi bi-person-circle fs-3 text-primary",
    },
    {
      id: "withdrawn",
      title: "Withdrawn",
      value: data?.withdrawnData || 0,
      unit: "BNB",
      iconClass: "bi bi-arrow-down-circle fs-3 text-primary",
    },
    {
      id: "refRewards",
      title: "Ref Rewards",
      value: data?.refRewards || 0,
      unit: "BNB",
      iconClass: "bi bi-gift fs-3 text-primary",
    },
  ];
  