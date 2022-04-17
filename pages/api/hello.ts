// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  articles: any,

}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({

    articles: [
        {
            title: 'title ',
            desc: 'desc ',
            icon: 'searchIcon ',
        },
        {
            title: 'title ',
            desc: 'desc ',
            icon: 'searchIcon ',
        },
        {
            title: 'title ',
            desc: 'desc ',
            icon: 'searchIcon ',
        },

    ],

  })
}
