import json

from rest_framework.renderers import JSONRenderer


class UnionJSONRenderer(JSONRenderer):
    charset = 'utf-8'

    def render(self, data, media_type=None, renderer_context=None):
        # If the view throws an error `data` will contain an `errors` key. We want
        # the default JSONRenderer to handle rendering errors, so we need to check for this case.
        errors = data.get('errors', None)

        if errors is not None:
            return super(UnionJSONRenderer, self).render(data)

        # No need to return user id's here.
        del data['creator_id']
        return json.dumps({
            'union': data
        })
