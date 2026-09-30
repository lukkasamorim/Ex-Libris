/* ============================================================
   Ex-Libris · configuração local
   ------------------------------------------------------------
   Este arquivo guarda as chaves do Supabase e NÃO é substituído
   quando o index.html é atualizado. Preencha uma vez só.

   Onde achar os valores:
   Supabase > seu projeto > Project Settings > API
     Project URL  ->  SUPABASE_URL
     anon public  ->  SUPABASE_ANON   (começa com "eyJ")

   A chave anon pode ficar visível no código do cliente: é para
   isso que ela existe. Quem protege os dados é o Row Level
   Security criado pelo supabase.sql. Nunca coloque aqui a chave
   service_role, porque ela ignora todas as regras de segurança.

   Deixando as duas em branco, o app funciona salvando apenas
   no navegador, sem login.

   Se for subir para o GitHub em repositório público, adicione
   este arquivo ao .gitignore e recrie no servidor.
   ============================================================ */

window.EXLIBRIS = {
  SUPABASE_URL:  "https://sigbwjuiguryyxkamyjl.supabase.co",
  SUPABASE_ANON: "sb_publishable_qNACpRCehFpsJ40KmbL4AQ_yO3ZUMFm"
};
