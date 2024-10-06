FROM node:20.0.0 as builder
WORKDIR /app

COPY ../../ ./
RUN npm i -g pnpm@8.8.0
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

RUN npx nx run manage-task:build:prod
RUN pnpm deploy --filter=web --prod /apps/manage-task

FROM nginx
EXPOSE 1111
COPY --from=builder /app/apps/manage-task/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/apps/manage-task/dist /usr/share/nginx/html