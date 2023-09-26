import axios from 'axios';

export const sdk = {
  send: async (body: any): Promise<Response> => {
    const { data } = await axios.request({
      method: 'POST',
      url: 'https://hooks.slack.com/services/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',
      headers: { 'Content-type': 'application/json' },
      data: body,
    });
    return data;
  },
};
