import * as core from '@actions/core';

describe('action scaffold', () => {
  it('fails explicitly until WireGuard connection support exists', async () => {
    const setFailed = jest.spyOn(core, 'setFailed').mockImplementation(() => undefined);

    await import('../src/main');

    expect(setFailed).toHaveBeenCalledWith(
      'This action is scaffolding only; WireGuard connection support is not implemented yet.',
    );
  });
});
