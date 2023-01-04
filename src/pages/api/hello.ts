// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};
type ErrorMsg = {
  message: string;
};

export default function handler({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse<Data | ErrorMsg>;
}) {
  if (req.method === 'GET') res.status(200).json({ name: 'John Doe' });
  else res.status(405).json({ message: 'Method not allowed' });
}
