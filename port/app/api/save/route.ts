import { GETIP, SaveIp } from "@/app/models/ipsave";

export const POST = async (request: Request) => {
  const body = await request.json();
  //   const { ip, changeIpLink } = body;
  await SaveIp(body);
  return Response.json({
    message: "Success",
  });
};

export const GET = async (request: Request) => {
  const data = await GETIP();

  return Response.json({ message: "Success", data });
};
