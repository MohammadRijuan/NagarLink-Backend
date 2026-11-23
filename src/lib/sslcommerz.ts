import config from "../config";


interface SslCommerzResponse {
  status?: string;
  failedreason?: string;
  GatewayPageURL?: string;
  redirectGatewayURL?: string;
  tran_id?: string;
  val_id?: string;
  [key: string]: unknown;
}

const getBaseUrl = () => {
  if (!config.ssl_base_url || !config.ssl_store_id || !config.ssl_store_password) {
    throw new Error("SSLCommerz configuration is missing");
  }

  return config.ssl_base_url.replace(/\/+$/, "");
};

export const createSslCommerzSession = async (
  payload: Record<string, string>,
): Promise<SslCommerzResponse> => {
  const baseUrl = getBaseUrl();

  const formData = new URLSearchParams({
    store_id: config.ssl_store_id!,
    store_passwd: config.ssl_store_password!,
    ...payload,
  });

  const response = await fetch(`${baseUrl}/gwprocess/v4/api.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to connect to SSLCommerz");
  }

  return (await response.json()) as SslCommerzResponse;
};

export const validateSslCommerzPayment = async (
  valId: string,
): Promise<SslCommerzResponse> => {
  const baseUrl = getBaseUrl();

  const params = new URLSearchParams({
    val_id: valId,
    store_id: config.ssl_store_id!,
    store_passwd: config.ssl_store_password!,
    format: "json",
  });

  const response = await fetch(
    `${baseUrl}/validator/api/validationserverAPI.php?${params.toString()}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to validate SSLCommerz transaction");
  }

  return (await response.json()) as SslCommerzResponse;
};
