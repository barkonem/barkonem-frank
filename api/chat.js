export default async function handler(req, res) {
    if (req.method !== 'POST') {
          return res.status(405).json({ error: 'Method not allowed' });
    }

  const { system, messages } = req.body;

  try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
                method: 'POST',
                headers: {
                          'Content-Type': 'application/json',
                          'x-api-key': process.env.ANTHROPIC_API_KEY,
                          'anthropic-version': '2023-06-01'
                },
                body: JSON.stringify({
                          model: 'claude-sonnet-4-5',
                          max_tokens: 1024,
                          system: system,
                          messages: messages
                })
        });

      const data = await response.json();

      if (!response.ok) {
              console.error('Anthropic API error:', response.status, JSON.stringify(data));
              return res.status(502).json({ error: `Anthropic API error ${response.status}`, details: data });
      }

      res.status(200).json(data);
  } catch (error) {
        console.error('Proxy error:', error.message);
        res.status(500).json({ error: 'Proxy error', message: error.message });
  }
}
