import type { NextApiHandler } from 'next';

const handlePreviewRequest: NextApiHandler = async (req, res) => {
    console.log('api-だよ------------')
    res.writeHead(307, { Location: `/blog` });
    res.status(200).json({ message: 'Hello from Next.js!'})
}

export default handlePreviewRequest;