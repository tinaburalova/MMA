import { ExpoRequest, ExpoResponse } from 'expo-router/server';

export async function GET(request: ExpoRequest) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');

  if (!code) {
    return ExpoResponse.json({ error: 'No code provided' }, { status: 400 });
  }

  // Tu neskôr pridáme výmenu kódu za skutočný token
  // Pre teraz len potvrdíme, že callback funguje
  return ExpoResponse.json({ message: 'Callback úspešný', code });
}